import { Args, Query, Resolver } from "@nestjs/graphql";
import { Task } from "../../../models/task.model";
import { TaskService } from "../services/task.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT } from "../../../role";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { TaskFilter } from "../../../models/filter.model";
import { FilterService } from "../../../filter/services/filter.service";
import { CacheInterceptor } from "../../../cache/interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../filter/interceptors/task.interceptor";

const TaskCacheInterceptor = CacheInterceptor({ prefix: "tasks" });

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { name: "listTasks" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(TaskCacheInterceptor, FilterInterceptor("tasks"))
  async list(
    @User() { id }: JwtPayload,
    @Args("filter", { type: () => TaskFilter, nullable: true })
    _filters?: TaskFilter
  ) {
    const tasks = await this.taskService.list(id);
  }
}
