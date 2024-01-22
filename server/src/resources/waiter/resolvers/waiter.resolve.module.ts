import { Module } from "@nestjs/common";
import { UpdateWaiterGuard } from "../guards/waiter.guard";
import { WaiterServiceModule } from "../services/waiter.service.module";
import { WaiterResolver } from "./waiter.resolver";
import { FieldResolver } from "./field.resolver";
import { SecurityModule } from "../../../security/security.module";

@Module({
  imports: [SecurityModule, WaiterServiceModule],
  providers: [UpdateWaiterGuard, WaiterResolver, FieldResolver],
})
export class WaiterResolveModule {}
