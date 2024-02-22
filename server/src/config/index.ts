import { RedisModuleOptions } from "@nestjs-modules/ioredis";
import { ApolloDriverConfig } from "@nestjs/apollo";
import { Logger } from "@nestjs/common";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
import { join } from "path";
import { EnviromentVariableNotFoundException } from "../error";

export class Config {
  static logger = new Logger();
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

  static getCorsConfig(configService: ConfigService): CorsOptions {
    const variable = "ADMIN_DOMAIN";
    const ADMIN_DOMAIN = configService.get(variable);
    const NODE_ENV = configService.get("NODE_ENV");
    if (!ADMIN_DOMAIN) {
      if (NODE_ENV == "production")
        throw new EnviromentVariableNotFoundException(variable, "Config");
      Config.logger.warn(`Variable ${variable} not found!`, "Config");
    }
    return {
      origin: [ADMIN_DOMAIN || "http://localhost:3001"],
      allowedHeaders: ["Content-Type", "Authorization", "User-Agent"],
      credentials: true,
    };
  }
}
