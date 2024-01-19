import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  Category,
  CreateCategory,
  Deleted,
  JwtPayload,
  Restaurant,
  UpdateCategory,
  Victual,
  WhereCategory,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { CategoryGuard } from "./guard/category.guard";
import { GetCategory } from "./guard/category.decorator";
import { IdIntercept } from "../auth/guards/id";
import { RID } from "../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../role/role";

@Resolver("Category")
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Category, { name: "createCategory" })
  create(@User() { id }: JwtPayload, @Args("data") data: CreateCategory) {
    return this.categoryService.create({ ...data, restaurantId: id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Category, { name: "createCategories" })
  createMany(@User() user: JwtPayload, @Args("data") data: CreateCategory[]) {
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
  @Mutation(() => Deleted, { name: "deleteCategory" })
  delete(@User() user: JwtPayload, @Args("where") where: WhereCategory) {
    return this.categoryService.delete(where);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), CategoryGuard)
  @Query(() => Category, { name: "category" })
  async find(@GetCategory() category: Category) {
    return category;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  @Query(() => [Category], { name: "categories" })
  async list(@RID() restaurantId: number) {
    return this.categoryService.list(restaurantId);
  }
}
