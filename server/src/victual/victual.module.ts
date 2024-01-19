import { Module } from "@nestjs/common";
import { CategoryModule } from "../category/category.module";
import { VictualService } from "./victual.service";
import { VictualResolver } from "./victual.resolver";
import { VictualGuardModule } from "./guard/victual.guard.module";
import { FieldModule } from './field/field.module';

@Module({
  imports: [CategoryModule, VictualGuardModule, FieldModule],
  providers: [VictualService, VictualResolver],
  exports: [VictualService],
})
export class VictualModule {}
