import { Module } from "@nestjs/common";
import { TaskServiceModule } from "../services/task.service.module";
import { TaskResolver } from "./task.resolver";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [TaskServiceModule],
  providers: [TaskResolver, FieldResolver],
})
export class TaskResolverModule {}
