import { Test, TestingModule } from "@nestjs/testing";
import { SubscriptionService } from "./subscription.service";
import { PrismaMainModule } from "../../prisma/main/prisma.main.module";

describe("SubscriptionService", () => {
  let service: SubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [SubscriptionService],
    }).compile();

    service = module.get<SubscriptionService>(SubscriptionService);
  });
  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
