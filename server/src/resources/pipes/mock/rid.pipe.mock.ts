import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class AddRIDMock implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (Array.isArray(value))
      return value.map((v) => ({ ...v, restaurantId: 1 }));
    return { ...value, restaurantId: 1 };
  }
}
