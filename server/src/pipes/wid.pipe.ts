import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
  Scope,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { RESTAURANT, WAITER } from "../role";
import { JwtPayload } from "../interfaces/jwt.interface";
import { SomethingWentWrongException } from "../error";

@Injectable({ scope: Scope.REQUEST })
export class AddWID implements PipeTransform {
  ERROR = "not valid for this route because it is not called by a waiter";
  constructor(@Inject(REQUEST) private request: Request) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const user = (this.request as any).req.user as JwtPayload;
    if (user.role != WAITER) throw new SomethingWentWrongException(this.ERROR);
    const waiterId = user.id;
    if (Array.isArray(value)) return value.map((v) => ({ ...v, waiterId }));
    return { ...value, waiterId };
  }
}
