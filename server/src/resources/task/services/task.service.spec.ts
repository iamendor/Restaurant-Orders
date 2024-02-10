import { Test, TestingModule } from "@nestjs/testing";
import { TaskService } from "./task.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { mockTask } from "../../../../test/helper/mock.unit";

describe("ServicesService", () => {
  let service: TaskService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [TaskService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<TaskService>(TaskService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should init tasks for restaurant", async () => {
    prisma.baseTask.findMany = jest.fn().mockReturnValue([mockTask]);
    prisma.task.createMany = jest.fn().mockReturnValue(true);

    const created = await service.init(1);
    expect(created.message).toBe("success");
  });
});
