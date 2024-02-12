import { Injectable } from "@nestjs/common";
import { Task } from "../../../../models/task.model";
import { BaseTask, Task as PTask } from "@prisma/client";
import { SUCCESS } from "../../../../response";

@Injectable()
export class TaskServiceMock {
  task: Task;
  constructor() {
    this.task = { name: "Test application", id: 1, done: false };
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
