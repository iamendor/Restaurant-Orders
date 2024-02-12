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
import { VictualFilter } from "../../../models/filter.model";
import { VictualGuard } from "../../../guard";
import { GetVictual } from "../../../decorators";
import {
  CREATE_VICTUAL_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { FilterInterceptor } from "../../../interceptors/task.interceptor";
import { MinArrayPipe } from "../../../pipes/array.pipe";
import { PermissionDeniedException } from "../../../error";

const VictualCacheInterceptor = CacheInterceptor({
  prefix: "victuals",
  map: (v) => ({ ...v, createdAt: new Date(v.createdAt) }),
});
const VictualClearCacheInterceptor = ClearCacheInterceptor("victuals");

@Resolver((of) => Victual)
export class VictualResolver {
  constructor(
    private readonly victualService: VictualService,
    private readonly categoryService: CategoryService
  ) {}

  private;

  @Mutation(() => Victual, { name: "createVictual" })
  @UseInterceptors(
    VictualClearCacheInterceptor,
    TaskInterceptor(CREATE_VICTUAL_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(
    @User() { id }: JwtPayload,
    @Args("data", AddRID) data: CreateVictual
  ) {
    const { categoryId } = data;
    const isCatValid = await this.categoryService.validate({
      restaurantId: id,
      id: categoryId,
    });

    if (!isCatValid) throw new PermissionDeniedException();

    const victual = await this.victualService.create(data);

    return victual;
  }

  @Mutation(() => Success, { name: "createVictuals" })
  @UseInterceptors(
    VictualClearCacheInterceptor,
    TaskInterceptor(CREATE_VICTUAL_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @Args("data", { type: () => [CreateVictual] }, MinArrayPipe, AddRID)
    data: CreateVictual[]
  ) {
    const categories = [...new Set(data.map((v) => v.categoryId))];

    for (let i = 0; i < categories.length; i++) {
      const catId = categories[i];
      await this.categoryService.validate({
        id: catId,
        restaurantId: data[i].restaurantId,
      });
    }

    return this.victualService.createMany(data);
  }

  @Mutation(() => Victual, { name: "updateVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), VictualGuard)
  @UseInterceptors(VictualClearCacheInterceptor)
  update(@Args("data") data: UpdateVictual) {
    return this.victualService.update(data);
  }

  @Mutation(() => Success, { name: "deleteVictual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), VictualGuard)
  @UseInterceptors(VictualClearCacheInterceptor)
  delete(@Args("where") where: WhereVictual) {
    return this.victualService.delete(where);
  }

  @Query(() => [Victual], { name: "victuals" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(VictualCacheInterceptor, FilterInterceptor("victuals"))
  list(
    @RID() id: number,
    @Args("filter", { nullable: true, type: () => VictualFilter })
    _filters?: VictualFilter
  ) {
    return this.victualService.list(id);
  }

  @Query(() => Victual, { name: "victual" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), VictualGuard)
  async find(@GetVictual() victual: Victual, @Args("where") _: WhereVictual) {
    return victual;
  }
}
