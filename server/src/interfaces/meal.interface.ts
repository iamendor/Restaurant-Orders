import { OrderId } from "./order.interface";

export interface CreateMealData {
  start: Date;
  end: Date;
  total: number;
  tableId: number;
  restaurantId: number;
  orderIds: OrderId[];
  waiterId: number;
}
