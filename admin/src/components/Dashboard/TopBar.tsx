"use client";
import styles from "@/styles/Dashboard/TopBar.module.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HREF = {
  "/dashboard": "Dashboard",
  "/dashboard/waiters": "Waiters",
  "/dashboard/waiters/edit": "Waiters",
  "/dashboard/waiters/delete": "Waiters",
  "/dashboard/waiters/create": "Waiters",

  "/dashboard/account": "Settings",
};

export default function TopBar({ name }) {
  const path = usePathname();
  return (
    <div className={styles.topbar}>
      <Title path={path} name={name} />
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
  return <h1>{HREF[path]}</h1>;
};
