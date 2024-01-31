import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { Config } from "../config";
import { ApolloDriver } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { DateScalar } from "../models/date.model";
import { PrismaModule } from "../prisma/prisma.module";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: Config.getJwtConfig,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => Config.getGqlModuleOptions(config),
    }),
    PrismaModule
  ],
  providers: [DateScalar],
  exports: [JwtModule, GraphQLModule, ConfigModule],
})
export class CoreModule {}
