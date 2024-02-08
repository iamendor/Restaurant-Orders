import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "../services/category.service";
import { Logger, UseGuards, UseInterceptors } from "@nestjs/common";
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
import { FilterService } from "../../../filter/services/filter.service";
import { CategoryFilter } from "../../../models/filter.model";
import { CacheService } from "../../../cache/services/cache.service";
import { GetCategory } from "../../decorators";
import {
  CREATE_CATEGORY_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";

@Resolver((of) => Category)
export class CategoryResolver {
  logger = new Logger();
  constructor(
    private readonly categoryService: CategoryService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number) {
    return `categories:${restaurantId}`;
  }
  private clearCache(restaurantId: number) {
    this.cacheService.del(this.cachePrefix(restaurantId));
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(TaskInterceptor(CREATE_CATEGORY_ACTION))
  @Mutation(() => Category, { name: "createCategory" })
  async create(@User() { id }: JwtPayload, @Args("data") data: CreateCategory) {
    const category = await this.categoryService.create({
      ...data,
      restaurantId: id,
    });

    this.clearCache(id);

    return category;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(TaskInterceptor(CREATE_CATEGORY_ACTION))
  @Mutation(() => Success, { name: "createCategories" })
  async createMany(
    @User() { id }: JwtPayload,
    @Args("data", { type: () => [CreateCategory] }) data: CreateCategory[]
  ): Promise<Success> {
    const categories = await this.categoryService.createMany(
      data.map((cat) => ({ ...cat, restaurantId: id }))
    );

    this.clearCache(id);

    return categories;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @Mutation(() => Category, { name: "updateCategory" })
  async update(@Args("data") data: UpdateCategory, @User() { id }: JwtPayload) {
    const updated = await this.categoryService.update(data);

    this.clearCache(id);

    return updated;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @Mutation(() => Success, { name: "deleteCategory" })
  async delete(
    @Args("where") where: WhereCategory,
    @User() { id }: JwtPayload
  ) {
    const deleted = await this.categoryService.delete(where);

    this.clearCache(id);

    return deleted;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), CategoryGuard)
  @Query(() => Category, { name: "category" })
  async find(
    @GetCategory() category: Category,
    @Args("where") _: WhereCategory
  ) {
    return category;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @Query(() => [Category], { name: "categories" })
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => CategoryFilter })
    filters?: CategoryFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });

    if (cached) {
      const remap = cached.map((cat) => ({
        ...cat,
        createdAt: new Date(cat.createdAt),
      }));

      if (filters)
        return this.filterService.categories({
          data: remap,
          filters,
        });

      return remap;
    }

    const categories = await this.categoryService.list(restaurantId);
    if (filters)
      return this.filterService.categories({
        data: categories,
        filters,
      });
    return categories;
  }
}
