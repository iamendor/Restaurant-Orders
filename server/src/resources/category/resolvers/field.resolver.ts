import { UseGuards } from "@nestjs/common";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { FieldService } from "../services/field.service";
import { Victual } from "../../../models/victual.model";
import { Restaurant } from "../../../models/restaurant.model";
import { Category } from "../../../models/category.model";
import { RESTAURANT, WAITER } from "../../../role";

@Resolver((of) => Category)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => [Victual], { name: "victuals" })
  getVictuals(@Parent() category: Category) {
    return this.fieldService.getVictuals(category.id);
  }
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getResturant(@Parent() category: Category) {
    return this.fieldService.getRestaurant(category.id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => [Category], { name: "subs" })
  getSubCategories(@Parent() category: Category) {
    return this.fieldService.getSubCategories(category.id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @ResolveField(() => Category, { name: "parent", nullable: true })
  getParent(@Parent() category: Category) {
    return this.fieldService.getParentCategory(category.id);
  }
}
