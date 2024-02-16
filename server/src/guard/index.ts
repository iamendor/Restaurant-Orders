import { CategoryService } from "../resources/category/services/category.service";
import { OpenHourService } from "../resources/openhour/services/openhour.service";
import { OrderService } from "../resources/order/services/order.service";
import { TableService } from "../resources/table/services/table.service";
import { ProductService } from "../resources/product/services/product.service";
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

export const ProductGuard = ResourceGuard({
  UPDATE: "updateProduct",
  DELETE: "deleteProduct",
  FIND: "product",
  Inject: ProductService,
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
