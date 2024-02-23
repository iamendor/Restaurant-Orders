import styles from "@/styles/Dashboard/Actions.module.scss";
import Image from "next/image";
import Link from "next/link";
export default function Actions({
  className = "",
  onEditHref = "",
  onDeleteHref = "",
}) {
  return (
    <div className={`${className} ${styles.actions}`}>
      <Link passHref href={onEditHref}>
        <Image
          src="/dashboard/actions/edit.svg"
          width={20}
          height={20}
          alt="Restify Resource Edit"
          className={styles.image}
        />
      </Link>
      <Link passHref href={onDeleteHref}>
        <Image
          src="/dashboard/actions/delete.svg"
          width={20}
          height={20}
          alt="Restify Resource Delete"
          className={styles.image}
        />
      </Link>
    </div>
  );
}
