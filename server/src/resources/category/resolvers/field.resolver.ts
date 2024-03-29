import { UseGuards } from "@nestjs/common";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { FieldService } from "../services/field.service";
import { Product } from "../../../models/resources/product.model";
import { Restaurant } from "../../../models/resources/restaurant.model";
import { Category } from "../../../models/resources/category.model";
import { RESTAURANT, WAITER } from "../../../role";

@Resolver((of) => Category)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => [Product], { name: "products" })
  getProducts(@Parent() category: Category) {
    return this.fieldService.getProducts(category.id);
  }
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getResturant(@Parent() category: Category) {
    return this.fieldService.getRestaurant(category.id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => [Category], { name: "subCategories" })
  getSubCategories(@Parent() category: Category) {
    return this.fieldService.getSubCategories(category.id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => Category, { name: "parent", nullable: true })
  getParent(@Parent() category: Category) {
    return this.fieldService.getParentCategory(category.id);
  }
}
