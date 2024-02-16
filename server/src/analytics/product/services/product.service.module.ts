import { Module } from "@nestjs/common";
import { FieldService } from "./field.service";
import { PopularProductService } from "./product.service";

@Module({
  providers: [PopularProductService, FieldService],
  exports: [PopularProductService, FieldService],
})
export class PopularProductServiceModule {}
