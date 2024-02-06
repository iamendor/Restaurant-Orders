import { Test, TestingModule } from "@nestjs/testing";
import { OpenHourResolver } from "./openhour.resolver";
import { OpenHourService } from "../services/openhour.service";
import { OpenHourServiceMock } from "../services/mock/openhour.service.mock";
import { getMocks } from "../../../../test/helper/mocks";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";

describe("OpenHourResolver", () => {
  let resolver: OpenHourResolver;
  const mocks = getMocks();
  let openHour = mocks.openingHour();
  const jwt = { id: 1 } as JwtPayload;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: OpenHourService, useClass: OpenHourServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        OpenHourResolver,
      ],
    }).compile();

    resolver = module.get<OpenHourResolver>(OpenHourResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create an open hour", async () => {
    const oh = await resolver.create(openHour, jwt);
    expect(oh).toBeDefined();
  });
  it("create multiple open hour", async () => {
    const oh = await resolver.createMany([openHour], jwt);
    expect(oh.message).toBe("success");
  });
  it("updates the open hour", async () => {
    const update = { name: "Sunday" };
    const oh = await resolver.update(
      {
        where: { id: 1 },
        update,
      },
      jwt
    );
    expect(oh.name).toBe(update.name);
  });
  it("lists all", async () => {
    const ls = await resolver.list(jwt.id);
    expect(ls.length).toEqual(2);
  });
  it("deletes open hour", async () => {
    const deleted = await resolver.delete({ id: 1 }, { id: 1 } as JwtPayload);
    expect(deleted.message).toBe("success");
  });
});
