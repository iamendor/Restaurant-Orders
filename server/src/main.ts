import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaClientException } from "./exceptions/prisma.exception";
import { ConfigService } from "@nestjs/config";
import { UnExpectedException } from "./exceptions/unexpected.exception";
import { AuthExceptionFilter } from "./exceptions/unauthorized.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get<ConfigService>(ConfigService);
  app.useGlobalFilters(new UnExpectedException());
  app.useGlobalFilters(new PrismaClientException());
  app.useGlobalFilters(new AuthExceptionFilter());
  await app.listen(config.get("PORT"));
}
bootstrap();
