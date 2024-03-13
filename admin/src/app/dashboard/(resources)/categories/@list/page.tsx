"use client";
import useResource from "@/utils/useresource";
import styles from "./page.module.scss";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "@/apollo/queries";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import Loading from "@/components/Loading";
import Error from "@/components/Dashboard/Resource/Error";

export default function ListPage() {
  const { session, setError, error, params, id, path, router } = useResource();
  const { data, loading, refetch } = useQuery(CATEGORIES, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    onError: (err) => setError(err.message),
    onCompleted: () => setError(null),
    skip: !session,
  });

  if (loading || !session || !data) return <Loading />;
  if (error && !loading)
    return <Error error={error} ignore={() => refetch()} />;

  console.log(data);
  return (
    <>
      <CategoryColumn />
    </>
  );
}

export function CategoryColumn() {
  return (
    <div className={styles.columns}>
      <div className={`${styles.column} ${styles.no}`}>No.</div>
      <div className={`${styles.column} ${styles.name}`}>Name</div>
      <div className={`${styles.column} ${styles.subcats}`}>Subcategories</div>
      <div className={`${styles.column} ${styles.actions}`}>Actions</div>
    </div>
  );
}
