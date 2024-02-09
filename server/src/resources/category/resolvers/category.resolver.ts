import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "../services/category.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { CategoryGuard } from "../../guard";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../../../role";
import {
  Category,
  CreateCategory,
  UpdateCategory,
  WhereCategory,
} from "../../../models/category.model";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { Success } from "../../../models/success.model";
import { CategoryFilter } from "../../../models/filter.model";
import { GetCategory } from "../../decorators";
import {
  CREATE_CATEGORY_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../filter/interceptors/task.interceptor";

const CategoryCacheInterceptor = CacheInterceptor({
  prefix: "categories",
  map: (data) => ({ ...data, createdAt: new Date(data) }),
});
const CategoryClearCacheInterceptor = ClearCacheInterceptor("categories");

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  //TODO: pipe
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(
    TaskInterceptor(CREATE_CATEGORY_ACTION),
    CategoryClearCacheInterceptor
  )
  @Mutation(() => Category, { name: "createCategory" })
  create(@User() { id }: JwtPayload, @Args("data") data: CreateCategory) {
    return this.categoryService.create({
      ...data,
      restaurantId: id,
    });
  }

  //TODO: pipe
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(
    TaskInterceptor(CREATE_CATEGORY_ACTION),
    CategoryClearCacheInterceptor
  )
  @Mutation(() => Success, { name: "createCategories" })
  createMany(
    @User() { id }: JwtPayload,
    @Args("data", { type: () => [CreateCategory] }) data: CreateCategory[]
  ): Promise<Success> {
    return this.categoryService.createMany(
      data.map((cat) => ({ ...cat, restaurantId: id }))
    );
  }

  @Mutation(() => Category, { name: "updateCategory" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @UseInterceptors(CategoryClearCacheInterceptor)
  update(@Args("data") data: UpdateCategory, @User() { id }: JwtPayload) {
    return this.categoryService.update(data);
  }

  @Mutation(() => Success, { name: "deleteCategory" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @UseInterceptors(CategoryClearCacheInterceptor)
  delete(@Args("where") where: WhereCategory) {
    return this.categoryService.delete(where);
  }

  @Query(() => Category, { name: "category" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), CategoryGuard)
  async find(
    @GetCategory() category: Category,
    @Args("where") _: WhereCategory
  ) {
    return category;
  }

  @Query(() => [Category], { name: "categories" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(CategoryCacheInterceptor, FilterInterceptor("categories"))
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => CategoryFilter })
    _filters?: CategoryFilter
  ) {
    return await this.categoryService.list(restaurantId);
  }
}
