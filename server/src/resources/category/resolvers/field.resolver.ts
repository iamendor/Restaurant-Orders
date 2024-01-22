import { UseGuards } from "@nestjs/common";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { FieldService } from "../services/field.service";
import { Victual } from "../../../models/victual.model";
import { Restaurant } from "../../../models/restaurant.model";
import { Category } from "../../../models/category.model";

@Resolver((of) => Category)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @ResolveField(() => [Victual], { name: "victuals" })
  getVictuals(@Parent() category: Category) {
    return this.fieldService.getVictuals(category.id);
  }
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getResturant(@Parent() category: Category) {
    return this.fieldService.getRestaurant(category.id);
  }
}
