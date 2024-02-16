import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  mixin,
} from "@nestjs/common";
import { Observable, map, tap } from "rxjs";

export const ExcludeKeyInterceptor = (key: string) => {
  @Injectable()
  class CI implements NestInterceptor {
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>
    ): Observable<any> {
      return next.handle().pipe(
        map((data) => {
          if (Array.isArray(data))
            return data.map(({ [key]: excluded, ...d }) => d);
          const { [key]: excluded, ...d } = data;
          return d;
        })
      );
    }
  }
  return mixin(CI);
};

export const ExcludePassowrdInterceptor = ExcludeKeyInterceptor("password");
