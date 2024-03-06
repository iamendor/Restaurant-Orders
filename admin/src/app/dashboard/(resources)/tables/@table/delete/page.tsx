"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_TABLE } from "@/apollo/mutations";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import Error from "@/components/Dashboard/Resource/Error";
import Loading from "@/components/Loading";
import { TABLE, TABLES } from "@/apollo/queries";
import Success from "@/components/Dashboard/Resource/Success";
import NotFound from "@/components/Dashboard/Resource/NotFound";
import Link from "next/link";
import { toastSuccess } from "@/utils/toast";
import useResource from "@/utils/useresource";

export default function CreateTable() {
  const { session, id, params, router, setError, error } = useResource();

  const { data, loading } = useQuery(TABLE, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    variables: { where: { id: Number(id) } },
    skip: !session || !id,
  });
  const [deleteTable, { loading: mutating, data: deleted }] = useMutation(
    DELETE_TABLE,
    {
      client: apolloClient,
      context: genAuthHeaders(session?.jwt),
      refetchQueries: [TABLES],
      onCompleted: () => router.push("/dashboard/tables"),
      onQueryUpdated: (ob) => ob.refetch(),
      variables: {
        where: {
          id: Number(id),
        },
      },
    }
  );

  useEffect(() => {
    setError(null);
  }, [params]);

  if (!id) return router.push("/dashboard/tables");
  if (!session || loading || mutating) return <Loading />;
  if (error)
    return (
      <Error
        error={error}
        ignore={() => router.push(`/dashboard/tables?id=${data?.table?.id}`)}
      />
    );
  if (!data) return <NotFound what="Table" />;
  if (deleted) return <Success />;

  const { table } = data;
  const { name } = table;

  const deleteTabSubmit = () => {
    if (table.orders.length > 0) return setError("Table has active orders!");
    deleteTable().then(({ data }) => {
      return data && toastSuccess(`${name} deleted successfully!`);
    });
  };

  return (
    <>
      <h1 className={styles.question}>
        Are you sure you want delete <span>{name}</span>?
      </h1>
      <div className={styles.choose}>
        <p onClick={deleteTabSubmit}>Yes, Delete</p>
        <Link href="/dashboard/tables">Keep it</Link>
      </div>
    </>
  );
}
