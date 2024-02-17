import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { Config } from "../config";
import { ApolloDriver } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { DateScalar } from "../models/resources/date.model";
import * as Joi from "joi";
import { RedisModule } from "@nestjs-modules/ioredis";
import { PrismaModule } from "../prisma/prisma.module";
import { ScheduleModule } from "@nestjs/schedule";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        API_PORT: Joi.number().required(),
        NODE_ENV: Joi.string().default("test"),
      }).options({
        abortEarly: true,
      }),
    }),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: Config.getRedisConfig,
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
    ScheduleModule.forRoot(),
    PrismaModule,
  ],
  providers: [DateScalar],
  exports: [JwtModule, GraphQLModule, ConfigModule],
})
export class CoreModule {}
