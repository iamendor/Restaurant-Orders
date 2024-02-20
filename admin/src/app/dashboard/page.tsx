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
    todayAnalytics: {
      income,
      waiter: {
        best: { name },
      },
    },
    orders,
    listTasks,
    restaurantInfo: { currency, open },
    analytics,
    analyticsSummary: { income: sumIncome },
  } = data;

  return (
    <div className={styles.dashboard}>
      <Income income={income} symbol={currency.symbol} />
      <Open open={open} />
      <BestWaiter name={name} />
      <Reservations />
      <LatestOrders orders={orders.slice(0, 4)} />
      <IncomeStats
        summary={sumIncome}
        incomes={analytics.map((a) => a.income)}
      />
      <TopIncome
        today={income.total}
        income={sumIncome.range.top}
        symbol={currency.symbol}
      />
      <ActiveOrders orders={orders} />
      <MissingTasks tasks={listTasks} />
    </div>
  );
}
