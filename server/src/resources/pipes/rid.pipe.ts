import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
  Scope,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { RESTAURANT } from "../../role";
import { JwtPayload } from "../../interfaces/jwt.interface";

@Injectable({ scope: Scope.REQUEST })
export class AddRID implements PipeTransform {
  constructor(@Inject(REQUEST) private request: Request) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const user = (this.request as any).req.user as JwtPayload;
    const restaurantId = user.role == RESTAURANT ? user.id : user.restaurantId;
    if (Array.isArray(value)) return value.map((v) => ({ ...v, restaurantId }));
    return { ...value, restaurantId };
  }
}
