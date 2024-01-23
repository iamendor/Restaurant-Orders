import { Module } from "@nestjs/common";
import { TableResolverModule } from "./resolvers/table.resolver.module";

@Module({
  imports: [TableResolverModule],
})
export class TableModule {}
