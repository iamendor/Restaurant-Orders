import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecurityModule } from "./security/security.module";
import { FilterModule } from "./filter/filter.module";
import { ResourceModule } from "./resources/resources.module";

@Module({
  imports: [
    PrismaModule,
    CoreModule,
    AuthModule,
    SubscriptionModule,
    SecurityModule,
    FilterModule,
    ResourceModule,
  ],
})
export class AppModule {}
