import { Args, Query, Resolver } from "@nestjs/graphql";
import { Task } from "../../../models/resources/task.model";
import { TaskService } from "../services/task.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT } from "../../../role";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { TaskFilter } from "../../../models/resources/filter.model";
import { CacheInterceptor } from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";

const TaskCacheInterceptor = CacheInterceptor({ prefix: "tasks" });

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { name: "listTasks" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(TaskCacheInterceptor, FilterInterceptor("tasks"))
  list(
    @User() { id }: JwtPayload,
    @Args("filter", { type: () => TaskFilter, nullable: true })
    _filters?: TaskFilter
  ) {
    return this.taskService.list(id);
  }
}
