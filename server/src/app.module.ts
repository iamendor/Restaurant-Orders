import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { ConfigModule } from "@nestjs/config";
import { Config } from "./config";
import { AuthModule } from "./auth/auth.module";
import { WaiterModule } from "./waiter/waiter.module";
import { AddressModule } from "./address/address.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: Config.getGqlConfig().typePaths,
      playground: true,
      definitions: {
        ...Config.getGqlConfig(),
      },
    }),
    RestaurantModule,
    AuthModule,
    WaiterModule,
    AddressModule,
  ],
})
export class AppModule {}
