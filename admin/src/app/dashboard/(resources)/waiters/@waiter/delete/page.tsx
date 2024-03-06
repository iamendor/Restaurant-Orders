"use client";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import { DELETE_WAITER } from "@/apollo/mutations";
import { WAITERS } from "@/apollo/queries";
import styles from "./page.module.scss";
import Loading from "@/components/Loading";
import { DEFAULT_ICON } from "@/utils/defaults";
import { useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toastSuccess } from "@/utils/toast";
import Error from "@/components/Dashboard/Resource/Error";
import NotFound from "@/components/Dashboard/Resource/NotFound";
import Success from "@/components/Dashboard/Resource/Success";
import useResource from "@/utils/useresource";

export default function EditWaiter() {
  const { session, id, router, params, error, setError } = useResource();
  const [deleteWaiter, { loading: mutating, data: mutateData }] = useMutation(
    DELETE_WAITER,
    {
      client: apolloClient,
      context: genAuthHeaders(session?.jwt),
      refetchQueries: [WAITERS],
      variables: {
        where: {
          id: Number(id),
        },
      },
      onQueryUpdated: (ob) => ob.refetch(),
      onCompleted: () => {
        return router.push("/dashboard/waiters");
      },
      onError: (error) => {
        if (error.message == "Dependant data")
          setError("Waiter has active orders!");
      },
    }
  );
  const { loading, data } = useQuery(WAITERS, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
  });

  useEffect(() => {
    setError(null);
  }, [params]);

  if (!id) return router.push("/dashboard/waiters");
  if (!session || loading || mutating) return <Loading />;
  if (error) {
    return (
      <Error
        error={error}
        ignore={() => router.push(`/dashboard/waiters?id=${id}`)}
      />
    );
  }

  const waiter = data.waiters.find((w) => w.id == id);
  if (!waiter) {
    if (mutateData) return <Success />;
    return <NotFound what="Waiter" />;
  }

  return (
    <>
      <div className={styles.profileIcon}>
        <Image
          src={waiter.profileIcon || DEFAULT_ICON}
          width={50}
          height={50}
          alt="Restify Delete Waiter"
        />
      </div>
      <h1 className={styles.question}>
        Are you sure you want delete <span>{waiter.name}</span>?
      </h1>
      <div className={styles.choose}>
        <p
          onClick={() =>
            deleteWaiter().then(({ data }) => {
              return (
                data && toastSuccess(`${waiter.name} deleted successfully!`)
              );
            })
          }
        >
          Yes, Delete
        </p>
        <Link href="/dashboard/waiters">Keep it</Link>
      </div>
    </>
  );
}
