import styles from "@/styles/Dashboard/Cards.module.scss";
import Image from "next/image";
import { useMemo } from "react";

export function Income({ income, symbol }) {
  return (
    <div className={styles.income}>
      <Image
        src="/dashboard/income.svg"
        width={55}
        height={55}
        alt="Restify Income symbol"
      />
      <div className={styles.content}>
        <h2>
          {symbol}
          {income.total}
        </h2>
        <p>Income</p>
      </div>
    </div>
  );
}

export function Open({ open }) {
  const OPEN = "Open";
  const CLOSED = "Closed";
  return (
    <div className={styles.open}>
      {open ? (
        <Image
          className={styles.image}
          src="/dashboard/open.svg"
          width={60}
          height={60}
          alt="Restify Open Restaurant"
        />
      ) : (
        <Image
          className={styles.image}
          src="/dashboard/closed.svg"
          width={60}
          height={60}
          alt="Restify Open Restaurant"
        />
      )}

      <p>{open ? OPEN : CLOSED}</p>
    </div>
  );
}

export function BestWaiter({ waiter }) {
  return (
    <div className={styles.waiter}>
      <Image
        src="/dashboard/waiter.jpg"
        width={80}
        height={80}
        alt="Restify Best Waiter"
      />
      <div className={`${styles.content} ${!waiter?.name && styles.nowaiter}`}>
        <h2>{waiter?.name || "No information"}</h2> <p>Today's waiter</p>
      </div>
    </div>
  );
}

export function Reservations() {
  return (
    <div className={styles.reservations}>
      <p>Reservations</p>
    </div>
  );
}

export function LatestOrders({ orders }) {
  return (
    <div className={styles.orders}>
      <p>Latest orders</p>
      {orders.map((order) => (
        <Order order={order} key={order.id} />
      ))}
    </div>
  );
}

export function Order({ order }) {
  const READY = "Ready";
  const NOTREADY = "Not ready";
  const {
    product: { name: productName },
    table: { name: tableName },
    isReady,
  } = order;
  return (
    <div className={styles.order}>
      <p>{productName}</p>
      <div className={styles.details}>
        <p>{tableName}</p>
        <p className={`${styles[isReady ? "ready" : "notready"]}`}>
          {isReady ? READY : NOTREADY}
        </p>
      </div>
    </div>
  );
}

export function TopIncome({ income, today, symbol }) {
  const createdAt = useMemo(
    () => new Date(income.createdAt).toLocaleDateString().replace(/\s/g, ""),
    []
  );
  const compareToday = useMemo(() => {
    if (today == 0) return "";
    const diff = Math.round(((income.total - today) / today) * 100);
    if (diff < 0) return `${Math.abs(diff)}% lower than today!`;
    return `${diff}% higher than today!`;
  }, []);
  return (
    <div className={styles.topincome}>
      <p className={styles.title}>
        Top income <br />
        <span>on the week</span>
      </p>
      <h1>{createdAt}</h1>
      <h2>
        {symbol}
        {income.total}
      </h2>
      <p className={styles.diff}>{compareToday}</p>
    </div>
  );
}

export function ActiveOrders({ orders }) {
  const notReady = orders.filter((o) => o.isReady).length;
  return (
    <div className={styles.active_order}>
      <h1>{orders.length}</h1>
      <p>Active order</p>
      <p className={styles.notready}>{notReady} is ready</p>
    </div>
  );
}

export function MissingTasks({ tasks }) {
  return (
    <div className={styles.tasks}>
      <h1>Missing tasks</h1>
      <div className={styles.tasklist}>
        {tasks.map((task) => (
          <MissingTask task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export function MissingTask({ task }) {
  return (
    <div className={styles.task}>
      <Image
        src="/dashboard/taskcircle.svg"
        width={20}
        height={20}
        alt="Restify Missing tasks"
      />
      {task.base.name}
    </div>
  );
}
