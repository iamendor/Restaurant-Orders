import { Module } from "@nestjs/common";
import { WaiterService } from "./waiter.service";
import { WaiterResolver } from "./waiter.resolver";
import { SecurityModule } from "../security/security.module";
import { FieldModule } from './field/field.module';

@Module({
  imports: [SecurityModule, FieldModule],
  providers: [WaiterService, WaiterResolver],
  exports: [WaiterService],
})
export class WaiterModule {}
