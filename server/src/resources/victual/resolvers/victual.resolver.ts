import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { VictualService } from "../services/victual.service";
import { User } from "../../../auth/decorators/user.decorator";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT, WAITER } from "../../../role";
import { CategoryService } from "../../category/services/category.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Victual,
  CreateVictual,
  UpdateVictual,
  WhereVictual,
} from "../../../models/victual.model";
import { Success } from "../../../models/success.model";
import { FilterService } from "../../../filter/services/filter.service";
import { VictualFilter } from "../../../models/filter.model";
import { PermissionDeniedException } from "../../../error";
import { CacheService } from "../../../cache/services/cache.service";
import { VictualGuard } from "../../guard";
import { GetVictual } from "../../decorators";
import {
  CREATE_VICTUAL_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";

export interface VerifyCategory {
  restaurantId: number;
  categoryId: number;
}

@Resolver((of) => Victual)
export class VictualResolver {
  constructor(
    private readonly victualService: VictualService,
    private readonly categoryService: CategoryService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private async checkCategory({ restaurantId, categoryId }: VerifyCategory) {
    const category = await this.categoryService.find({ id: categoryId });
    if (category.restaurantId != restaurantId)
      throw new PermissionDeniedException();
    return true;
  }

  private cachePrefix(restaurantId) {
    return `victuals:${restaurantId}`;
  }

  private clearCache(restaurantId: number) {
    this.cacheService.del(this.cachePrefix(restaurantId));
  }

  @Mutation(() => Victual, { name: "createVictual" })
  @UseInterceptors(TaskInterceptor(CREATE_VICTUAL_ACTION))
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@User() { id }: JwtPayload, @Args("data") data: CreateVictual) {
    const { categoryId } = data;
    await this.checkCategory({ restaurantId: id, categoryId });

    const victual = await this.victualService.create({
      ...data,
      restaurantId: id,
    });

    this.clearCache(id);

    return victual;
  }

  @Mutation(() => Success, { name: "createVictuals" })
  @UseInterceptors(TaskInterceptor(CREATE_VICTUAL_ACTION))
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

    const victuals = await this.victualService.createMany(
      data.map((meal) => ({ ...meal, restaurantId: id }))
    );

    this.clearCache(id);

    return victuals;
  }
  //Victual Guard
  @Mutation(() => Victual, { name: "updateVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), VictualGuard)
  async update(@Args("data") data: UpdateVictual, @User() { id }: JwtPayload) {
    const updated = await this.victualService.update(data);

    this.cacheService.del(this.cachePrefix(id));

    return updated;
  }

  @Mutation(() => Success, { name: "deleteVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), VictualGuard)
  async delete(@Args("where") where: WhereVictual, @User() { id }: JwtPayload) {
    const deleted = await this.victualService.delete(where);

    this.clearCache(id);

    return deleted;
  }

  @Query(() => [Victual], { name: "victuals" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  async list(
    @RID() id: number,
    @Args("filter", { nullable: true, type: () => VictualFilter })
    filters?: VictualFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(id),
      json: true,
    });

    if (cached) {
      const remap = cached.map((vict) => ({
        ...vict,
        createdAt: new Date(vict.createdAt),
      }));

      if (filters) return this.filterService.victual({ data: remap, filters });
      return remap;
    }

    const victuals = await this.victualService.list(id);

    this.cacheService.set({
      key: this.cachePrefix(id),
      value: JSON.stringify(victuals),
      ttl: 120_000,
    });

    if (filters) return this.filterService.victual({ data: victuals, filters });
    return victuals;
  }

  @Query(() => Victual, { name: "victual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), VictualGuard)
  async find(@GetVictual() victual: Victual, @Args("where") _: WhereVictual) {
    return victual;
  }
}
