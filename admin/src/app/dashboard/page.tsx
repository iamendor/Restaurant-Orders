import { getDashboardData } from "@/apollo/functions";
import styles from "./page.module.scss";
import {
  ActiveOrders,
  BestWaiter,
  Income,
  LatestOrders,
  MissingTasks,
  Open,
  Reservations,
  TopIncome,
} from "@/components/Dashboard/Cards";
import { IncomeStats } from "@/components/Dashboard/CardsClient";

export default async function DashboardPage() {
  const data = await getDashboardData();
  if (!data) return <p>Error</p>;

  const {
    orders,
    listTasks,
    restaurantInfo: { currency, open },
    analytics,
  } = data;

  const {
    todaySummary: { income: sumIncome, ...todaySummary },
    weeklySummary: { income, ...weeklySummary },
  } = data;

  return (
    <div className={styles.dashboard}>
      <Income income={sumIncome} symbol={currency.symbol} />
      <Open open={open} />
      <BestWaiter
        waiter={todaySummary.waiter?.best || weeklySummary.waiter?.best}
      />
      <Reservations />
      <LatestOrders orders={orders.slice(0, 4)} />
      <IncomeStats summary={income} incomes={analytics.map((a) => a.income)} />
      <TopIncome
        today={sumIncome.total}
        income={income.range.top}
        symbol={currency.symbol}
      />
      <ActiveOrders orders={orders} />
      <MissingTasks tasks={listTasks} />
    </div>
  );
}
