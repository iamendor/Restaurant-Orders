import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { Success } from "../../../models/resources/success.model";
import { WhereTask } from "../../../interfaces/task.interface";
import { Task } from "../../../models/resources/task.model";
import { SUCCESS } from "../../../response";
import { PrismaStaticService } from "../../../prisma/static/services/prisma.static.service";
import { SomethingWentWrongException } from "../../../error";

@Injectable()
export class TaskService {
  constructor(
    private readonly prismaService: PrismaMainService,
    private readonly prismaStaticService: PrismaStaticService,
  ) {}

  private getBase() {
    return this.prismaStaticService.task.findMany();
  }
  async init(restaurantId: number): Promise<Success> {
    const base = await this.getBase();

    await this.prismaService.task.createMany({
      data: base.map((task) => ({ restaurantId, baseId: task.id })),
    });

    return SUCCESS;
  }

  async list(restaurantId: number): Promise<Task[]> {
    return this.prismaService.task.findMany({
      where: { restaurantId },
    });
  }
  async tick(where: WhereTask) {
    await this.prismaService.task.update({ where, data: { done: true } });
    return true;
  }
  clear(restaurantId: number) {
    return this.prismaService.task.deleteMany({ where: { restaurantId } });
  }
  async findByAction({ restaurantId, action }) {
    const base = await this.prismaStaticService.task.findUnique({
      where: { action },
    });
    if (!base) return null;
    const task = (await this.list(restaurantId)).find(
      (t) => t.baseId == base.id,
    );
    if (!task) return null;
    return task;
  }
}
