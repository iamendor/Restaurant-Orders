import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { ShortArrayException } from "../error";

@Injectable()
export class MinArrayPipe implements PipeTransform {
  length: number = 1;
  transform(value: any[], metadata: ArgumentMetadata) {
    if (value.length < this.length) throw new ShortArrayException(this.length);
    return value;
  }
}
