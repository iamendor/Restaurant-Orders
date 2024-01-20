import { Module } from "@nestjs/common";
import { SubscriptionService } from "./services/subscription.service";

@Module({
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
