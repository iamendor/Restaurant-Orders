"use client";
import styles from "./page.module.scss";
import { genAuthHeaders, getWaiters } from "@/apollo/functions";
import Image from "next/image";
import Actions from "../../Actions";
import { DEFAULT_ICON } from "@/utils/defaults";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { WAITERS } from "@/apollo/queries";
import Loading from "@/components/Loading";
import apolloClient from "@/apollo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Error from "@/components/Dashboard/Resource/Error";
import Link from "next/link";

export default function WaiterList() {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const { data, loading, error } = useQuery(WAITERS, {
    context: genAuthHeaders(session?.jwt),
    client: apolloClient,
  });

  if (loading || !session) return <Loading />;
  if (!data) return <Error error={error?.message || "Something went wrong!"} />;

  const { waiters } = data;

  if (
    waiters.length != 0 &&
    !params.get("id") &&
    path == "/dashboard/waiters"
  ) {
    router.push(`/dashboard/waiters?id=${waiters[0].id}`);
  }

  return (
    <>
      <WaiterColumn />
      {waiters.map((w, i) => (
        <Waiter waiter={w} key={w.id} i={i} />
      ))}
    </>
  );
}

export function WaiterColumn() {
  return (
    <div className={styles.columns}>
      <div className={styles.profileIcon}></div>
      <h2 className={`${styles.column} ${styles.name}`}>Name</h2>
      <h2 className={`${styles.column} ${styles.email}`}>Email</h2>
      <h2 className={`${styles.column} ${styles.gender}`}>Gender</h2>
      <h2 className={`${styles.column} ${styles.actions}`}>Actions</h2>
    </div>
  );
}

export function Waiter({ waiter, i }) {
  return (
    <Link
      href={`/dashboard/waiters?id=${waiter.id}`}
      className={`${styles.waiter}`}
      style={
        {
          "--delay": `${i * 50}ms`,
        } as React.CSSProperties
      }
    >
      <div className={styles.profileIcon}>
        <div className={styles.wrapper}>
          <Image
            src={waiter.profileIcon || DEFAULT_ICON}
            className={styles.image}
            width={20}
            height={20}
            alt=""
          />
        </div>
      </div>
      <p className={styles.name}>{waiter.name}</p>
      <p className={styles.email}>{waiter.email}</p>
      <p className={styles.gender}>{waiter.gender}</p>
      <Actions
        className={styles.actions}
        onEditHref={`/dashboard/waiters/edit?id=${waiter.id}`}
        onDeleteHref={`/dashboard/waiters/delete?id=${waiter.id}`}
      />
    </Link>
  );
}
