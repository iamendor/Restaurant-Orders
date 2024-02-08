import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthResolverModule } from "./resolvers/auth.resolver.module";

@Module({
  imports: [AuthResolverModule],
  providers: [JwtStrategy],
})
export class AuthModule {}
