import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { ResourceModule } from "./resources/resources.module";

@Module({
  imports: [CoreModule, AuthModule, ResourceModule],
})
export class AppModule {}
