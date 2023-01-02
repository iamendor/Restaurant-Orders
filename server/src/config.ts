import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { GenerateOptions } from "@nestjs/graphql";
import { JwtModuleOptions } from "@nestjs/jwt";
import { PubSub } from "graphql-subscriptions";
import { join } from "path";

export class Config {
  static getGqlConfig(): GenerateOptions {
    return {
      typePaths: ["./src/schema.gql"],
      path: join(process.cwd(), "src/models/model.ts"),
      outputAs: "class",
    };
  }

  static getGqlModuleOptions(config: ConfigService): ApolloDriverConfig {
    const gql = Config.getGqlConfig();
    return {
      definitions: { ...gql },
      typePaths: gql.typePaths,
      playground: config.get("GRAPHQL_PLAYGROUND") || false,
      installSubscriptionHandlers: true,
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
      secret: configService.get("JWT_SECRET"),
      signOptions: {
        expiresIn: "12h",
      },
    };
  }
}

export const pubSub = new PubSub();
