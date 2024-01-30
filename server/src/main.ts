import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaClientException } from "./exceptions/prisma.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new PrismaClientException());
  await app.listen(3000);
}
bootstrap();
