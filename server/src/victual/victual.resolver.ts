import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { VictualService } from "./victual.service";
import {
  Category,
  CreateVictual,
  CreateVictuals,
  Deleted,
  JwtPayload,
  Order,
  UpdateVictual,
  Victual,
  VictualsCreated,
  WhereVictual,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { HttpException, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import { WaiterService } from "../waiter/waiter.service";

@Resolver("Victual")
export class VictualResolver {
  constructor(
    private readonly victualService: VictualService,
    private readonly waiterService: WaiterService
  ) {}

  @Mutation(() => Victual, { name: "createVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateVictual) {
    if (!data.category && !data.categoryId)
      throw new HttpException("category or categoryId is required", 400);
    return this.victualService.create({ ...data, restaurantId: restaurant.id });
  }

  @Mutation(() => VictualsCreated, { name: "createVictuals" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  createMany(
    @User() restaurant: JwtPayload,
    @Args("data") data: CreateVictuals[]
  ) {
    return this.victualService.createMany(
      data.map((meal) => ({ ...meal, restaurantId: restaurant.id }))
    );
  }

  @Mutation(() => Victual, { name: "updateVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  update(@User() restaurant: JwtPayload, @Args("data") data: UpdateVictual) {
    return this.victualService.update({
      ...data,
      where: { ...data.where, restaurantId: restaurant.id },
    });
  }

  @Mutation(() => Deleted, { name: "deleteVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  delete(@User() restaurant: JwtPayload, @Args("where") where: WhereVictual) {
    return this.victualService.delete({
      ...where,
      restaurantId: restaurant.id,
    });
  }

  @Query(() => [Victual], { name: "victuals" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async list(@User() user: JwtPayload) {
    const id =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;

    return this.victualService.list(id);
  }

  @Query(() => Victual, { name: "victual" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereVictual) {
    const id =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;
    return this.victualService.find({ ...where, restaurantId: id });
  }

  @ResolveField(() => Category, { name: "category" })
  getCategory(@Parent() meal: Victual) {
    return this.victualService.getCategory(meal.id);
  }

  @ResolveField(() => Category, { name: "restaurant" })
  getRestaurant(@Parent() meal: Victual) {
    return this.victualService.getRestaurant(meal.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Victual) {
    return this.victualService.getOrders(meal.id);
  }
}
