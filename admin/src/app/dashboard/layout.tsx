"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.scss";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.page}>{children}</div>;
}
