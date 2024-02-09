import { CategoryService } from "../category/services/category.service";
import { OpenHourService } from "../openhour/services/openhour.service";
import { OrderService } from "../order/services/order.service";
import { TableService } from "../table/services/table.service";
import { VictualService } from "../victual/services/victual.service";
import { WaiterService } from "../waiter/services/waiter.service";
import { ResourceGuard } from "./resource.guard";

export const CategoryGuard = ResourceGuard({
  UPDATE: "updateCategory",
  DELETE: "deleteCategory",
  FIND: "category",
  Inject: CategoryService,
});

export const OrderGuard = ResourceGuard({
  UPDATE: "updateOrder",
  DELETE: "deleteOrder",
  FIND: "order",
  Inject: OrderService,
});

export const TableGuard = ResourceGuard({
  UPDATE: "updateTable",
  DELETE: "deleteTable",
  FIND: "table",
  Inject: TableService,
});

export const VictualGuard = ResourceGuard({
  UPDATE: "updateVictual",
  DELETE: "deleteVictual",
  FIND: "victual",
  Inject: VictualService,
});

export const OpenHourGuard = ResourceGuard({
  UPDATE: "updateOpenHour",
  FIND: "",
  DELETE: "deleteOpenHour",
  Inject: OpenHourService,
});
