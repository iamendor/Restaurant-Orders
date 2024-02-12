import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
  mixin,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { TaskService } from "../resources/task/services/task.service";
import { GqlExecutionContext } from "@nestjs/graphql";
import { WAITER } from "../role";

export const CREATE_WAITER_ACTION = "waiter.create";
export const CREATE_ORDER_ACTION = "order.create";
export const CREATE_TABLE_ACTION = "table.create";
export const CREATE_VICTUAL_ACTION = "victual.create";
export const CREATE_OPENHOUR_ACTION = "openhour.create";
export const CREATE_MEAL_ACTION = "meal.create";
export const CREATE_CATEGORY_ACTION = "category.create";

export function TaskInterceptor(action: string) {
  @Injectable()
  class TaskInterceptorClass implements NestInterceptor {
    logger: Logger = new Logger();
    constructor(public readonly taskService: TaskService) {}
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
      const user = GqlExecutionContext.create(context).getContext().req.user;
      const restaurantId = user.role == WAITER ? user.restaurantId : user.id;

      return next.handle().pipe(
        tap(async () => {
          const task = await this.taskService.findByAction({
            restaurantId: restaurantId,
            action: action,
          });
          if (!task)
            return this.logger.warn(
              `Cannot find task ${action} for ${restaurantId}`
            );
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
