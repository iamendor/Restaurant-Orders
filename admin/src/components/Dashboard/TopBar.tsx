"use client";
import styles from "@/styles/Dashboard/TopBar.module.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const HREF = {
  dashboard: {
    regex: /\/dashboard$/gm,
    value: "Dashboard",
  },
  waiters: {
    regex: /\/waiters/gm,
    value: "Waiters",
  },
  settings: {
    regex: /\/dashboard\/account/g,
    value: "Settings",
  },
  tables: {
    regex: /\/tables/gm,
    value: "Tables",
  },
};

export default function TopBar({ name }) {
  const path = usePathname();
  const title = useMemo(() => {
    const entries = Object.values(HREF);
    for (let i = 0; i < entries.length; i++) {
      const regex = entries[i].regex;
      const title = entries[i].value;
      if (path.match(regex) != null) {
        return title;
      }
    }
  }, [path]);
  return (
    <div className={styles.topbar}>
      <Title path={path} name={path == "/dashboard" ? name : title} />
      <Image
        className={styles.bell}
        src="/dashboard/bell.svg"
        width={50}
        height={50}
        alt="Restify Notifictaion bell"
      />
      <Link href="/dashboard/account">Account</Link>
    </div>
  );
}

const Title = ({ path, name = "" }) => {
  if (path == "/dashboard") {
    return (
      <h1>
        Hello, <span>{name}</span>!
      </h1>
    );
  }
  return <h1>{name}</h1>;
};
