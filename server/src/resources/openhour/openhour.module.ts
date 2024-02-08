import { Module } from "@nestjs/common";
import { OpenHourResolverModule } from "./resolvers/openhour.resolver.module";

@Module({ imports: [OpenHourResolverModule] })
export class OpenHourModule {}
