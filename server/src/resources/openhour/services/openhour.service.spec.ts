import { Test } from "@nestjs/testing";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { OpenHourService } from "./openhour.service";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { mockOpenHour } from "../../../../test/helper/mock.unit";
import { SUCCESS } from "../../../response";

describe("OpenHour Service", () => {
  let service: OpenHourService;
  let prisma: PrismaMainService;
  const mockOpen = mockOpenHour;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [OpenHourService],
    }).compile();
    service = module.get<OpenHourService>(OpenHourService);
    prisma = module.get<PrismaMainService>(PrismaMainService);
  });

  it("should create an openhour", async () => {
    prisma.openingHour.create = jest.fn().mockReturnValue(mockOpen);

    const openingHour = await service.create(mockOpen);
    expect(openingHour).toBeDefined();
  });

  it("list all of restaurant", async () => {
    prisma.openingHour.findMany = jest
      .fn()
      .mockReturnValue([mockOpen, mockOpen]);

    const openingHours = await service.list(1);
    expect(openingHours.length).toEqual(2);
  });
  it("updates openHour", async () => {
    prisma.openingHour.update = jest
      .fn()
      .mockImplementation(({ where, data }) => ({
        ...mockOpen,
        ...where,
        ...data,
      }));
    const update = { name: "Tuesday" };

    const updated = await service.update({
      where: { id: 1 },
      update,
    });
    expect(updated.name).toBe(update.name);
  });
  it("deletes openHour", async () => {
    prisma.openingHour.delete = jest.fn().mockReturnValue(SUCCESS);

    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe("success");
  });
});
