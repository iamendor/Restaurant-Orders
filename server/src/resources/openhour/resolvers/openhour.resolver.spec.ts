import { Test, TestingModule } from "@nestjs/testing";
import { OpenHourResolver } from "./openhour.resolver";
import { OpenHourService } from "../services/openhour.service";
import { OpenHourServiceMock } from "../services/mock/openhour.service.mock";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { TaskService } from "../../task/services/task.service";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { ContextIdFactory } from "@nestjs/core";
import { mockOpenHour } from "../../../../test/helper/mock.unit";

describe("OpenHourResolver", () => {
  let resolver: OpenHourResolver;
  const jwt = { id: 1 } as JwtPayload;

  beforeEach(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: OpenHourService, useClass: OpenHourServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        PrismaService,
        IdGuard,
        OpenHourResolver,
      ],
    }).compile();

    resolver = await module.resolve<OpenHourResolver>(
      OpenHourResolver,
      contextId
    );
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create an open hour", async () => {
    const oh = await resolver.create(mockOpenHour);
    expect(oh).toBeDefined();
  });
  it("create multiple open hour", async () => {
    const oh = await resolver.createMany([mockOpenHour], jwt);
    expect(oh.message).toBe("success");
  });
  it("updates the open hour", async () => {
    const update = { name: "Sunday" };
    const oh = await resolver.update({
      where: { id: 1 },
      update,
    });
    expect(oh.name).toBe(update.name);
  });
  it("lists all", async () => {
    const ls = await resolver.list(jwt.id);
    expect(ls.length).toEqual(2);
  });
  it("deletes open hour", async () => {
    const deleted = await resolver.delete({ id: 1 });
    expect(deleted.message).toBe("success");
  });
});
