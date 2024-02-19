import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/Dashboard/TopBar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getServerSession();

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <TopBar name={user.name} />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
