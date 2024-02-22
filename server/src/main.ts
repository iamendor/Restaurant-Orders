import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaClientExceptionFilter } from "./exceptions/prisma.exception";
import { ConfigService } from "@nestjs/config";
import { UnExpectedExceptionFilter } from "./exceptions/unexpected.exception";
import { AuthExceptionFilter } from "./exceptions/unauthorized.exception";
import { Config } from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  app.enableCors(Config.getCorsConfig(config));
  app.useGlobalFilters(new UnExpectedExceptionFilter());
  app.useGlobalFilters(new PrismaClientExceptionFilter());
  app.useGlobalFilters(new AuthExceptionFilter());
  await app.listen(config.get("PORT"));
}
bootstrap();
