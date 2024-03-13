"use client";
import styles from "./page.module.scss";
import { genAuthHeaders } from "@/apollo/functions";
import Image from "next/image";
import Actions from "@/components/Dashboard/Actions";
import { DEFAULT_ICON } from "@/utils/defaults";
import { useQuery } from "@apollo/client";
import { WAITERS } from "@/apollo/queries";
import Loading from "@/components/Loading";
import apolloClient from "@/apollo";
import Error from "@/components/Dashboard/Resource/Error";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import useResource from "@/utils/useresource";

export default function WaiterList() {
  const { session, params, path, router } = useResource();

  const { data, loading, error, refetch } = useQuery(WAITERS, {
    context: genAuthHeaders(session?.jwt),
    client: apolloClient,
    skip: !session,
  });
  const canPush = useMemo(
    () =>
      data &&
      data?.waiters &&
      data?.waiters.length != 0 &&
      !params.get("id") &&
      path == "/dashboard/waiters",
    [data, params, path]
  );

  useEffect(() => {
    if (canPush) {
      router.push(`/dashboard/waiters?id=${data?.waiters[0].id}`);
    }
  }, [params, data]);

  if (loading || !session) return <Loading />;
  if (!data)
    return (
      <Error
        error={error?.message || "Something went wrong!"}
        ignore={() => refetch()}
      />
    );

  const { waiters } = data;

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
          "--delay": `${i * 20}ms`,
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
