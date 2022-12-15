import { UseGuards } from "@nestjs/common";
import { Resolver, Query } from "@nestjs/graphql";
import { User } from "src/auth/decorators/user.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { RoleGuard } from "src/auth/guards/role-guard";
import { JwtPayload, WaiterResponse } from "src/models/model";
import { WaiterService } from "./waiter.service";

@Resolver()
export class WaiterResolver {
  constructor(private readonly waiterService: WaiterService) {}

  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  @Query(() => WaiterResponse)
  waiterInfo(@User() user: JwtPayload) {
    return this.waiterService.find({ id: user.id }, true);
  }
}
