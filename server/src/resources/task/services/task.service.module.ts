import { Module } from "@nestjs/common";
import { TaskService } from "./task.service";
import { FieldService } from "../services/field.service";

@Module({
  providers: [TaskService, FieldService],
  exports: [TaskService, FieldService],
})
export class TaskServiceModule {}
