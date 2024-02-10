import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../src/app.module";
import { PrismaModule } from "../src/prisma/prisma.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaService } from "../src/prisma/services/prisma.service";

describe("Restaurant Orders E2E", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();
  });

  it("should be defined", () => {
    expect(app).toBeDefined();
  });

  afterAll(async () => await prisma.$disconnect(), 10_000);
});
