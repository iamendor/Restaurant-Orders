import { UseGuards } from "@nestjs/common";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Category } from "@prisma/client";
import { JwtAuthGuard } from "../../auth/guards/jwt-guard";
import { RoleGuard } from "../../auth/guards/role-guard";
import { Victual, Restaurant } from "../../models/model";
import { FieldService } from "./field.service";

@Resolver("Category")
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
