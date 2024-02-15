import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { FieldService } from "./field.service";

@Module({
  providers: [ProductService, FieldService],
  exports: [ProductService, FieldService],
})
export class VictualServiceModule {}
