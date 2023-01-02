import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Config } from "../config";
import { ApolloDriver } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: Config.getJwtConfig,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [JwtModule],
      inject: [ConfigService, JwtService],
      useFactory: (config: ConfigService, jwt: JwtService) =>
        Config.getGqlModuleOptions(config, jwt),
    }),
  ],
  exports: [JwtModule, GraphQLModule, ConfigModule],
})
export class CoreModule {}
