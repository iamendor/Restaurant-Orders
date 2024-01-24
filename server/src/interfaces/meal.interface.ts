import { OrderId } from "./order.interface";

export interface CreateMealData {
  start: string;
  end: string;
  total: number;
  tableId: number;
  restaurantId: number;
  orderIds: OrderId[];
  waiterId: number;
  currencyId: number;
}