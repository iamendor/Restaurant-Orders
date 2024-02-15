import { Injectable } from "@nestjs/common";
import { Task } from "../../../../models/resources/task.model";
import { Task as PTask } from "prisma/client/main";
import { Task as BaseTask } from "prisma/client/static";
import { SUCCESS } from "../../../../response";

@Injectable()
export class TaskServiceMock {
  task: Task;
  constructor() {
    this.task = {
      id: 1,
      done: false,
      baseId: 1,
      base: { name: "Test app!", id: 1 },
    };
  }
  init() {
    return SUCCESS;
  }

  list() {
    return [this.task];
  }

  tick() {
    return SUCCESS;
  }

  clear() {
    return true;
  }

  findByAction(): PTask & { base: BaseTask } {
    return {
      id: 1,
      restaurantId: 1,
      baseId: 1,
      done: false,
      base: { id: 1, action: "test", name: "Test application" },
    };
  }
}
