"use client";
import styles from "./page.module.scss";
import { useQuery } from "@apollo/client";
import { TABLES } from "@/apollo/queries";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import Loading from "@/components/Loading";
import Error from "@/components/Dashboard/Resource/Error";
import { useEffect, useMemo } from "react";
import Actions from "@/components/Dashboard/Actions";
import Link from "next/link";
import useResource from "@/utils/useresource";

export default function TableList() {
  const { session, setError, error, params, id, path, router } = useResource();
  const { data, loading, refetch } = useQuery(TABLES, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    onError: (err) => setError(err.message),
    onCompleted: () => setError(null),
    skip: !session,
  });
  const canPush = useMemo(
    () =>
      data &&
      data?.tables &&
      data?.tables.length != 0 &&
      !id &&
      path == "/dashboard/tables",
    [data, params, path]
  );

  useEffect(() => {
    if (canPush) {
      router.push(`/dashboard/tables?id=${data?.tables[0].id}`);
    }
  }, [params, path, loading]);

  if (loading || !session || !data) return <Loading />;
  if (error && !loading)
    return <Error error={error} ignore={() => refetch()} />;

  const { tables } = data;

  return (
    <>
      <TableColumn />
      {tables.map((table, i) => (
        <Table table={table} i={i} key={table.id} />
      ))}
    </>
  );
}

export function TableColumn() {
  return (
    <div className={styles.columns}>
      <div className={`${styles.no} ${styles.column}`}>No.</div>
      <div className={`${styles.column} ${styles.name}`}>Name</div>
      <div className={`${styles.column} ${styles.active}`}>Active</div>
      <div className={`${styles.column} ${styles.actions}`}>Actions</div>
    </div>
  );
}

export function Table({ table, i }) {
  const { name, orders } = table;
  const active = useMemo(
    () => (orders.length > 0 ? `${orders.length} orders` : "Inactive"),
    [orders]
  );
  return (
    <Link
      href={`/dashboard/tables?id=${table.id}`}
      className={styles.table}
      style={
        {
          "--delay": `${i * 20}ms`,
        } as React.CSSProperties
      }
    >
      <div className={styles.no}>{i + 1}.</div>
      <div className={styles.name}>{name}</div>
      <div className={orders.length > 0 ? styles.active : styles.inactive}>
        {active}
      </div>
      <Actions
        className={styles.actions}
        onEditHref={`/dashboard/tables/edit?id=${table.id}`}
        onDeleteHref={`/dashboard/tables/delete?id=${table.id}`}
      />
    </Link>
  );
}
