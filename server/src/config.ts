import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { GenerateOptions } from "@nestjs/graphql";
import { JwtModuleOptions } from "@nestjs/jwt";
import { PubSub } from "graphql-subscriptions";
import { join } from "path";

export class Config {
  static getGqlModuleOptions(config: ConfigService): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
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
