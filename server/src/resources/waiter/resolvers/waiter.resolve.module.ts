import { Module } from "@nestjs/common";
import { WaiterServiceModule } from "../services/waiter.service.module";
import { WaiterResolver } from "./waiter.resolver";
import { FieldResolver } from "./field.resolver";
import { SecurityModule } from "../../../security/security.module";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";
import { TaskServiceModule } from "../../task/services/task.service.module";
import { IdGuard } from "../../../auth/guard/id.guard";

@Module({
  imports: [
    SecurityModule,
    WaiterServiceModule,
    TaskServiceModule,
    FilterModule,
    CacheModule,
  ],
  providers: [IdGuard, WaiterResolver, FieldResolver],
})
export class WaiterResolveModule {}
