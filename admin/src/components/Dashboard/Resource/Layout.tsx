"use client";
import styles from "@/styles/Dashboard/Resource/Layout.module.scss";
import Link from "next/link";
export default function ResourceLayout({
  list,
  detail,
  createHref = "",
  detailClassName = "",
}: {
  list: React.ReactNode;
  detail: React.ReactNode;
  createHref?: string;
  detailClassName?: string;
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.list}>{list}</div>
      <Link href={createHref} className={styles.create}>
        Create
      </Link>
      <div className={`${styles.detail} ${detailClassName}`}>{detail}</div>
    </div>
  );
}
