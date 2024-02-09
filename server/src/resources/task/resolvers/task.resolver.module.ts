import { Module } from "@nestjs/common";
import { TaskServiceModule } from "../services/task.service.module";
import { TaskResolver } from "./task.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";

@Module({
  imports: [TaskServiceModule, FilterModule, CacheModule],
  providers: [TaskResolver, FieldResolver],
})
export class TaskResolverModule {}
