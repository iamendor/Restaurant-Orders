import styles from "@/styles/Dashboard/Cards.module.scss";
import Image from "next/image";

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
  const OPEN = "OPEN";
  const CLOSED = "CLOSED";

  return (
    <div className={styles.open}>
      <Image
        src="/dashboard/open.svg"
        width={70}
        height={70}
        alt="Restify Open Restaurant"
      />
      <p>{open ? OPEN : CLOSED}</p>
    </div>
  );
}
