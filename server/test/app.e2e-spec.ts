import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../src/app.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";

describe("Restaurant Orders E2E", () => {
  let app: INestApplication;
  let prisma: PrismaMainService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaMainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaMainService>(PrismaMainService);
    await app.init();
  });

  it("should be defined", () => {
    expect(app).toBeDefined();
  });

  afterAll(async () => await prisma.$disconnect(), 10_000);
});
