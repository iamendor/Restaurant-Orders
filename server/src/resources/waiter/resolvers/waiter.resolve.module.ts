import { Module } from "@nestjs/common";
import { UpdateWaiterGuard } from "../guards/waiter.guard";
import { WaiterServiceModule } from "../services/waiter.service.module";
import { WaiterResolver } from "./waiter.resolver";
import { FieldResolver } from "./field.resolver";
import { SecurityModule } from "../../../security/security.module";
import { FilterModule } from "../../../filter/filter.module";

@Module({
  imports: [SecurityModule, WaiterServiceModule, FilterModule],
  providers: [UpdateWaiterGuard, WaiterResolver, FieldResolver],
})
export class WaiterResolveModule {}
