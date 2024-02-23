"use client";
import styles from "@/styles/Dashboard/Resource/Layout.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function ResourceLayout({
  list,
  detail,
  createHref = "",
}: {
  list: React.ReactNode;
  detail: React.ReactNode;
  createHref?: string;
}) {
  const params = useSearchParams();
  const id = params.get("id");
  return (
    <div className={styles.layout}>
      <div className={styles.list}>{list}</div>
      <Link href={createHref} className={styles.create}>
        Create
      </Link>
      <div className={styles.detail}>{detail}</div>
    </div>
  );
}
