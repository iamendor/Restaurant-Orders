import { RedisModuleOptions } from "@nestjs-modules/ioredis";
import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
import { join } from "path";

export class Config {
  static getGqlModuleOptions(config: ConfigService): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      playground: config.get("GRAPHQL_PLAYGROUND") || false,
      installSubscriptionHandlers: true,
      includeStacktraceInErrorResponses: false,
      fieldResolverEnhancers: ["interceptors"],

      subscriptions: {
        "graphql-ws": true,
        "subscriptions-transport-ws": {
          path: "/graphql",
          onConnect: (connectionParams) => ({
            req: {
              headers: {
                authorization: connectionParams.Authorization,
              },
            },
          }),
        },
      },
      context: ({ req }) => req,
    };
  }

  static getJwtConfig(configService: ConfigService): JwtModuleOptions {
    return {
      secret: configService.getOrThrow("JWT_SECRET"),
      signOptions: {
        expiresIn: "12h",
      },
    };
  }

  static getRedisConfig(configService: ConfigService): RedisModuleOptions {
    return {
      type: "single",
      url: configService.get("REDIS_URL"),
    };
  }
}
