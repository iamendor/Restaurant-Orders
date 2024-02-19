import styles from "@/styles/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>Restify</div>
      <NavItem href="/dashboard">
        <Image
          className={styles.icon}
          src="/dashboard/home.svg"
          width={50}
          height={50}
          alt="Restify Home"
        />
        Dashboard
      </NavItem>
      <NavItem href="/dashboard/waiters">
        <Image
          className={styles.icon}
          src="/dashboard/waiter.svg"
          width={50}
          height={50}
          alt="Restify Waiter"
        />
        Waiters
      </NavItem>
      <NavItem href="/dashboard/tables">
        <Image
          className={styles.icon}
          src="/dashboard/table.svg"
          width={50}
          height={50}
          alt="Restify Table"
        />
        Tables
      </NavItem>
      <NavItem href="/dashboard/categories">
        <Image
          className={styles.icon}
          src="/dashboard/category.svg"
          width={50}
          height={50}
          alt="Restify Category"
        />
        Categories
      </NavItem>
      <NavItem href="/dashboard/products">
        <Image
          className={styles.icon}
          src="/dashboard/product.svg"
          width={50}
          height={50}
          alt="Restify Product"
        />
        Products
      </NavItem>
      <NavItem href="/dashboard/orders">
        <Image
          className={styles.icon}
          src="/dashboard/order.svg"
          width={50}
          height={50}
          alt="Restify Order"
        />
        Orders
      </NavItem>
      <NavItem href="/dashboard/openings">
        <Image
          className={styles.icon}
          src="/dashboard/door.svg"
          width={50}
          height={50}
          alt="Restify Opening"
        />
        Opening
      </NavItem>
      <NavItem href="/dashboard/stats">
        <Image
          className={styles.icon}
          src="/dashboard/stats.svg"
          width={50}
          height={50}
          alt="Restify Statistics"
        />
        Statistics
      </NavItem>
      <NavItem href="/dashboard/signout" className={styles.last}>
        <Image
          className={styles.icon}
          src="/dashboard/logout.svg"
          width={50}
          height={50}
          alt="Restify Home"
        />
        Log out
      </NavItem>
    </div>
  );
}

const NavItem = ({ children, href = "", className = "" }) => {
  return (
    <Link href={href} className={`${styles.navitem} ${className}`}>
      {children}
    </Link>
  );
};
