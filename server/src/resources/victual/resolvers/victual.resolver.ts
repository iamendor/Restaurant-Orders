import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { VictualService } from "../services/victual.service";
import { User } from "../../../auth/decorators/user.decorator";
import { ForbiddenException, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { RESTAURANT, WAITER } from "../../../role/role";
import { CategoryService } from "../../category/services/category.service";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { VictualGuard } from "../guard/victual.guard";
import { GetVictual } from "../decorators/victual.decorator";
import { JwtPayload } from "../../../models/jwt.model";
import {
  Victual,
  CreateVictual,
  UpdateVictual,
  WhereVictual,
} from "../../../models/victual.model";
import { Success } from "../../../models/other.model";

export interface VerifyCategory {
  restaurantId: number;
  categoryId: number;
}

@Resolver((of) => Victual)
export class VictualResolver {
  constructor(
    private readonly victualService: VictualService,
    private readonly categoryService: CategoryService
  ) {}

  private async checkCategory({ restaurantId, categoryId }: VerifyCategory) {
    const category = await this.categoryService.find({ id: categoryId });
    if (category.restaurantId != restaurantId) throw new ForbiddenException();
    return true;
  }

  @Mutation(() => Victual, { name: "createVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@User() { id }: JwtPayload, @Args("data") data: CreateVictual) {
    const { categoryId } = data;
    await this.checkCategory({ restaurantId: id, categoryId });
    return this.victualService.create({
      ...data,
      restaurantId: id,
    });
  }

  @Mutation(() => Success, { name: "createVictuals" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @User() { id }: JwtPayload,
    @Args("data", { type: () => [CreateVictual] }) data: CreateVictual[]
  ) {
    const categories = [...new Set(data.map((v) => v.categoryId))];
    for (let i = 0; i < categories.length; i++) {
      const catId = categories[i];
      await this.checkCategory({
        categoryId: catId,
        restaurantId: id,
      });
    }
    return this.victualService.createMany(
      data.map((meal) => ({ ...meal, restaurantId: id }))
    );
  }
  //Victual Guard
  @Mutation(() => Victual, { name: "updateVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), VictualGuard)
  update(@Args("data") data: UpdateVictual) {
    return this.victualService.update(data);
  }

  @Mutation(() => Success, { name: "deleteVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), VictualGuard)
  delete(@Args("where") where: WhereVictual) {
    return this.victualService.delete(where);
  }

  @Query(() => [Victual], { name: "victuals" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  async list(@RID() id: number) {
    return this.victualService.list(id);
  }

  @Query(() => Victual, { name: "victual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), VictualGuard)
  async find(@GetVictual() victual: Victual, @Args("where") _: WhereVictual) {
    return victual;
  }
}
