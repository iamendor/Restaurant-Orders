import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  mixin,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { TaskService } from "../services/task.service";
import { GqlExecutionContext } from "@nestjs/graphql";

export const CREATE_WAITER_ACTION = "waiter.create";

export function TaskInterceptor(action: string) {
  @Injectable()
  class TaskInterceptorClass implements NestInterceptor {
    constructor(public readonly taskService: TaskService) {}
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
      const user = GqlExecutionContext.create(context).getContext().req.user;

      return next.handle().pipe(
        tap(async () => {
          const task = await this.taskService.findByAction({
            restaurantId: user.id,
            action: action,
          });
          if (!task) return;
          if (!task.done) {
            await this.taskService.tick({ id: task.id });
          }
        })
      );
    }
  }
  const guard = mixin(TaskInterceptorClass);
  return guard;
}
