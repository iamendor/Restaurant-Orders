import ResourceLayout from "@/components/Dashboard/Resource/Layout";
import styles from "./page.module.scss";

export default function WaiterLayout({
  list,
  waiter,
}: Readonly<{
  children: React.ReactNode;
  list: React.ReactNode;
  waiter: React.ReactNode;
}>) {
  return (
    <ResourceLayout
      list={list}
      detail={waiter}
      createHref="/dashboard/waiters/create"
      detailClassName={styles.detail}
    />
  );
}
