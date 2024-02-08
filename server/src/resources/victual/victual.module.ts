import { Module } from "@nestjs/common";
import { VictualResolverModule } from "./resolvers/victual.resolver.module";

@Module({
  imports: [VictualResolverModule],
})
export class VictualModule {}
