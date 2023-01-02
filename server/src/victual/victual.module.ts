import { Module } from "@nestjs/common";
import { CategoryModule } from "../category/category.module";
import { VictualService } from "./victual.service";
import { VictualResolver } from "./victual.resolver";

@Module({
  imports: [CategoryModule],
  providers: [VictualService, VictualResolver],
  exports: [VictualService],
})
export class VictualModule {}
