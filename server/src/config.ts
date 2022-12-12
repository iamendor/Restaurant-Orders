import { ConfigService } from "@nestjs/config";
import { GenerateOptions } from "@nestjs/graphql";
import { JwtModuleOptions } from "@nestjs/jwt";
import { join } from "path";

export class Config {
  static getGqlConfig(): GenerateOptions {
    return {
      typePaths: ["./src/schema.gql"],
      path: join(process.cwd(), "src/models/model.ts"),
      outputAs: "class",
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
