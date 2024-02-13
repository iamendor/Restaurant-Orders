import { Test, TestingModule } from "@nestjs/testing";
import { TaskService } from "./task.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { mockTask } from "../../../../test/helper/mock.unit";
import { PrismaStaticModule } from "../../../prisma/static/prisma.static.module";
import { PrismaStaticService } from "../../../prisma/static/services/prisma.static.service";

describe("ServicesService", () => {
  let service: TaskService;
  let prisma: PrismaMainService;
  let prismaStatic: PrismaStaticService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, PrismaStaticModule],
      providers: [TaskService],
    }).compile();
    prisma = module.get<PrismaMainService>(PrismaMainService);
    prismaStatic = module.get<PrismaStaticService>(PrismaStaticService);
    service = module.get<TaskService>(TaskService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should init tasks for restaurant", async () => {
    prismaStatic.task.findMany = jest.fn().mockReturnValue([mockTask]);
    prisma.task.createMany = jest.fn().mockReturnValue(true);

    const created = await service.init(1);
    expect(created.message).toBe("success");
  });
});
