import { Query, Resolver } from "@nestjs/graphql";
import { Task } from "../../../models/task.model";
import { TaskService } from "../services/task.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { RESTAURANT } from "../../../role";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { name: "listTasks" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  list(@User() { id }: JwtPayload) {
    return this.taskService.list(id);
  }
}
