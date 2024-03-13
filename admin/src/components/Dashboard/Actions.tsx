"use client";
import styles from "@/styles/Dashboard/Actions.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Actions({
  className = "",
  onEditHref = "",
  onDeleteHref = "",
}) {
  const router = useRouter();
  const moveToEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(onEditHref);
  };
  const moveToDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(onDeleteHref);
  };
  return (
    <div className={`${className} ${styles.actions}`}>
      <Image
        onClick={moveToEdit}
        src="/dashboard/actions/edit.svg"
        width={20}
        height={20}
        alt="Restify Resource Edit"
        className={styles.image}
      />
      <Image
        onClick={moveToDelete}
        src="/dashboard/actions/delete.svg"
        width={20}
        height={20}
        alt="Restify Resource Delete"
        className={styles.image}
      />
    </div>
  );
}
