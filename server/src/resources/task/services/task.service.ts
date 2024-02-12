import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { Success } from "../../../models/success.model";
import { WhereTask } from "../../../interfaces/task.interface";
import { BaseTask, Task as PTask } from "@prisma/client";
import { Task } from "../../../models/task.model";
import { SUCCESS } from "../../../response";

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  private format({ id, base, done }: PTask & { base: BaseTask }): Task {
    return { id, name: base.name, done };
  }

  private getBase() {
    return this.prismaService.baseTask.findMany();
  }
  async init(restaurantId: number): Promise<Success> {
    const base = await this.getBase();

    await this.prismaService.task.createMany({
      data: base.map((task) => ({ restaurantId, baseId: task.id })),
    });

    return SUCCESS;
  }

  async list(restaurantId: number): Promise<Task[]> {
    const tasks = await this.prismaService.task.findMany({
      where: { restaurantId },
      include: { base: true },
    });

    return tasks.map(this.format);
  }
  async tick(where: WhereTask) {
    await this.prismaService.task.update({ where, data: { done: true } });
    return true;
  }
  clear(restaurantId: number) {
    return this.prismaService.task.deleteMany({ where: { restaurantId } });
  }
  findByAction({ restaurantId, action }) {
    return this.prismaService.task.findFirst({
      where: {
        restaurantId,
        base: {
          action,
        },
      },
    });
  }
}
