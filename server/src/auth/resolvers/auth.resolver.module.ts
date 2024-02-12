import { Module } from "@nestjs/common";
import { AuthServiceModule } from "../services/auth.service.module";
import { AuthResolver } from "./auth.resolver";
import { RestaurantServiceModule } from "../../resources/restaurant/services/restaurant.service.module";
import { TaskServiceModule } from "../../resources/task/services/task.service.module";

@Module({
  imports: [AuthServiceModule, RestaurantServiceModule, TaskServiceModule],
  providers: [AuthResolver],
})
export class AuthResolverModule {}
