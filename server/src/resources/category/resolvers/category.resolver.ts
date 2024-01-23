import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "../services/category.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { CategoryGuard } from "../guard/category.guard";
import { GetCategory } from "../decorators/category.decorator";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../../../role/role";
import {
  Category,
  CreateCategory,
  UpdateCategory,
  WhereCategory,
} from "../../../models/category.model";
import { JwtPayload } from "../../../models/jwt.model";
import { Success } from "../../../models/other.model";

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Category, { name: "createCategory" })
  create(@User() { id }: JwtPayload, @Args("data") data: CreateCategory) {
    return this.categoryService.create({ ...data, restaurantId: id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Success, { name: "createCategories" })
  createMany(
    @User() user: JwtPayload,
    @Args("data", { type: () => [CreateCategory] }) data: CreateCategory[]
  ): Promise<Success> {
    return this.categoryService.createMany(
      data.map((cat) => ({ ...cat, restaurantId: user.id }))
    );
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @Mutation(() => Category, { name: "updateCategory" })
  update(@Args("data") data: UpdateCategory) {
    return this.categoryService.update(data);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), CategoryGuard)
  @Mutation(() => Success, { name: "deleteCategory" })
  delete(@Args("where") where: WhereCategory) {
    return this.categoryService.delete(where);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), CategoryGuard)
  @Query(() => Category, { name: "category" })
  async find(
    @GetCategory() category: Category,
    @Args("where") _: WhereCategory
  ) {
    return category;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  @Query(() => [Category], { name: "categories" })
  async list(@RID() restaurantId: number) {
    return this.categoryService.list(restaurantId);
  }
}
