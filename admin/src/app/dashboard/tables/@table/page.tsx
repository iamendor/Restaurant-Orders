"use client";
import styles from "./page.module.scss";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import { TABLE } from "@/apollo/queries";
import Error from "@/components/Dashboard/Resource/Error";
import NotFound from "@/components/Dashboard/Resource/NotFound";
import Loading from "@/components/Loading";
import useResource from "@/utils/useresource";
import { useQuery } from "@apollo/client";
import { useEffect, useMemo } from "react";

export default function Table() {
  const { session, id, setError, error, router, params } = useResource();
  const { data, loading, refetch } = useQuery(TABLE, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    variables: { where: { id: Number(id) } },
    onError: (err) => setError(err.message),
  });
  const isActive = useMemo(() => {
    const canActive = data?.table?.orders?.length > 0;
    return canActive ? "Active" : "Inactive";
  }, [data]);

  useEffect(() => setError(null), [params]);

  if (!id) return router.push("/dashboard/tables");
  if (!session || loading) return <Loading />;
  if (!data) return <NotFound what="Table" />;
  if (error) return <Error error={error} ignore={() => refetch()} />;

  const { table } = data;
  const { name, orders } = table;

  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <p className={isActive == "Active" ? styles.active : styles.inactive}>
        {isActive}
      </p>
      <h2 className={styles.orders}>{orders.length > 0 && "Orders"}</h2>
      {orders.slice(0, 9).map((ord) => (
        <Order order={ord} key={ord.id} />
      ))}
    </>
  );
}
function Order({ order }) {
  const {
    quantity,
    isReady,
    product: { name },
  } = order;
  return (
    <div className={styles.order}>
      <p className={styles.name}>{name}</p>
      <p className={isReady ? styles.ready : styles.notready}>
        {isReady ? "Ready" : "Not ready"}
      </p>
    </div>
  );
}
