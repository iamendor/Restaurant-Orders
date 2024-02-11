import { CategoryService } from "../resources/category/services/category.service";
import { OpenHourService } from "../resources/openhour/services/openhour.service";
import { OrderService } from "../resources/order/services/order.service";
import { TableService } from "../resources/table/services/table.service";
import { VictualService } from "../resources/victual/services/victual.service";
import { WaiterService } from "../resources/waiter/services/waiter.service";
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

export const WaiterGuard = ResourceGuard({
  DELETE: "deleteWaiter",
  FIND: "",
  UPDATE: "",
  Inject: WaiterService,
});
