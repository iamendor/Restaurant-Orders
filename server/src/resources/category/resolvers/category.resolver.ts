import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "../services/category.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { CategoryGuard } from "../../../guard";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../../../role";
import {
  Category,
  CreateCategory,
  UpdateCategory,
  WhereCategory,
} from "../../../models/resources/category.model";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { Success } from "../../../models/resources/success.model";
import { CategoryFilter } from "../../../models/resources/filter.model";
import { GetCategory } from "../../../decorators";
import {
  CREATE_CATEGORY_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { MinArrayPipe } from "../../../pipes/array.pipe";
import {
  NestedCategoryException,
  PermissionDeniedException,
  UniqueFieldFailedException,
} from "../../../error";

const CategoryCacheInterceptor = CacheInterceptor({
  prefix: "categories",
  map: (data) => ({ ...data, createdAt: new Date(data) }),
});
const CategoryClearCacheInterceptor = ClearCacheInterceptor("categories");

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(
    TaskInterceptor(CREATE_CATEGORY_ACTION),
    CategoryClearCacheInterceptor
  )
  @Mutation(() => Category, { name: "createCategory" })
  async create(
    @Args("data", AddRID) data: CreateCategory,
    @User() { id }: JwtPayload
  ) {
    const isUnique = await this.categoryService.validateUnique({
      restaurantId: id,
      name: data.name,
    });
    if (!isUnique) throw new UniqueFieldFailedException("name");

    if (!data.parentId) return this.categoryService.create(data);
    const { parentId } = data;

    const isParentValid = await this.categoryService.validate({
      id: parentId,
      restaurantId: id,
    });
    if (!isParentValid) throw new PermissionDeniedException();

    const parentLevel = await this.categoryService.validateNesting(parentId);
    if (!parentLevel) throw new NestedCategoryException(parentId);

    return this.categoryService.create({ ...data, level: parentLevel + 1 });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(
    TaskInterceptor(CREATE_CATEGORY_ACTION),
    CategoryClearCacheInterceptor
  )
  @Mutation(() => Success, { name: "createCategories" })
  async createMany(
    @Args("data", { type: () => [CreateCategory] }, MinArrayPipe, AddRID)
    data: Required<CreateCategory>[],
    @User() { id }: JwtPayload
  ): Promise<Success> {
    const categories = (await this.categoryService.list(id)).map(
      (cat) => cat.name
    );
    for (let i = 0; i < data.length; i++) {
      if (categories.includes(data[i].name))
        throw new UniqueFieldFailedException("name");
    }

    const parents = [
      ...new Set(data.map((parent) => parent.parentId).filter(Number)),
    ];
    let parentsLevel = {};

    for (let i = 0; i < parents.length; i++) {
      const isParentValid = await this.categoryService.validate({
        id: parents[i],
        restaurantId: id,
      });
      if (!isParentValid) throw new PermissionDeniedException();

      const parentLevel = await this.categoryService.validateNesting(
        parents[i]
      );
      if (!parentLevel) throw new NestedCategoryException(parents[i]);
      parentsLevel[parents[i]] = parentLevel;
    }

    return this.categoryService.createMany(
      data.map((cat) =>
        cat.parentId ? { ...cat, level: parentsLevel[cat.parentId] } : cat
      )
    );
  }

  @Mutation(() => Category, { name: "updateCategory" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @UseInterceptors(CategoryClearCacheInterceptor)
  async update(@Args("data") data: UpdateCategory, @User() { id }: JwtPayload) {
    if (data.update.name) {
      const isUnique = await this.categoryService.validateUnique({
        restaurantId: id,
        name: data.update.name,
      });
      if (!isUnique) throw new UniqueFieldFailedException("name");
    }
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
