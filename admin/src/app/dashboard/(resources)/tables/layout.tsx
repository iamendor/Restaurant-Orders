import ResourceLayout from "@/components/Dashboard/Resource/Layout";
import styles from "./page.module.scss";

export default function WaiterLayout({
  list,
  table,
}: Readonly<{
  children: React.ReactNode;
  list: React.ReactNode;
  table: React.ReactNode;
}>) {
  return (
    <ResourceLayout
      list={list}
      detail={table}
      createHref="/dashboard/tables/create"
    />
  );
}
