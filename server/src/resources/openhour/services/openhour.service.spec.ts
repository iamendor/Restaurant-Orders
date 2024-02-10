import { Test } from "@nestjs/testing";
import { PrismaModule } from "../../../prisma/prisma.module";
import { OpenHourService } from "./openhour.service";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { mockOpenHour } from "../../../../test/helper/mock.unit";

describe("OpenHour Service", () => {
  let service: OpenHourService;
  let prisma: PrismaService;
  const mockOpen = mockOpenHour;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [OpenHourService],
    }).compile();
    service = module.get<OpenHourService>(OpenHourService);
    prisma = module.get<PrismaService>(PrismaService);
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
    prisma.openingHour.delete = jest
      .fn()
      .mockReturnValue({ message: "success" });

    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe("success");
  });
});
