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
import { WaiterService } from "../waiter/waiter.service";

@Resolver("Category")
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly waiterService: WaiterService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Category, { name: "createCategory" })
  create(@User() user: JwtPayload, @Args("data") data: CreateCategory) {
    return this.categoryService.create({ ...data, restaurantId: user.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Category, { name: "createCategories" })
  createMany(@User() user: JwtPayload, @Args("data") data: CreateCategory[]) {
    return this.categoryService.createMany(
      data.map((cat) => ({ ...cat, restaurantId: user.id }))
    );
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Category, { name: "updateCategory" })
  update(@User() user: JwtPayload, @Args("data") data: UpdateCategory) {
    return this.categoryService.update({
      ...data,
      where: { ...data.where, restaurantId: user.id },
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted, { name: "deleteCategory" })
  delete(@User() user: JwtPayload, @Args("where") where: WhereCategory) {
    return this.categoryService.delete({ ...where, restaurantId: user.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @Query(() => Category, { name: "category" })
  async find(@User() user: JwtPayload, @Args("where") where: WhereCategory) {
    return this.categoryService.find({
      ...where,
      restaurantId: user.role === "restaurant" ? user.id : user.restaurantId,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @Query(() => [Category], { name: "categories" })
  async list(@User() user: JwtPayload) {
    return this.categoryService.list(
      user.role === "restaurant" ? user.id : user.restaurantId
    );
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @ResolveField(() => [Victual], { name: "victuals" })
  getVictuals(@Parent() category: Category) {
    return this.categoryService.getVictuals(category.id);
  }
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getResturant(@Parent() category: Category) {
    return this.categoryService.getRestaurant(category.id);
  }
}
