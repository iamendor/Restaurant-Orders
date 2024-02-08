import { Module } from "@nestjs/common";
import { TaskResolverModule } from "./resolvers/task.resolver.module";

@Module({
  imports: [TaskResolverModule],
})
export class TaskModule {}
