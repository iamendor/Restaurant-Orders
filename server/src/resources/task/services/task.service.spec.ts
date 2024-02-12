import { Test, TestingModule } from "@nestjs/testing";
import { TaskService } from "./task.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { mockTask } from "../../../../test/helper/mock.unit";

describe("ServicesService", () => {
  let service: TaskService;
  let prisma: PrismaMainService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [TaskService],
    }).compile();
    prisma = module.get<PrismaMainService>(PrismaMainService);
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
