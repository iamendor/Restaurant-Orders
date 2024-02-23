"use client";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import { WAITER, WAITERS } from "@/apollo/queries";
import Loading from "@/components/Loading";
import { DEFAULT_ICON } from "@/utils/defaults";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.scss";
import NotFound from "@/components/Dashboard/Resource/NotFound";

export default function WaiterDetail() {
  const params = useSearchParams();
  const { data: session } = useSession();
  const id = params.get("id");
  const { data, loading } = useQuery(WAITER, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    variables: {
      where: {
        id: Number(id),
      },
    },
  });

  if (!id) return;

  if (!session || loading) return <Loading />;
  if (!data) return <NotFound what="Waiter" />;
  const { waiterInfo: waiter } = data;

  return (
    <>
      <div className={styles.wrapper}>
        <Image
          src={waiter.profileIcon || DEFAULT_ICON}
          width={50}
          height={50}
          alt="Restify Waiter Profile Icon"
        />
      </div>
      <h1 className={styles.name}>{waiter.name}</h1>
    </>
  );
}
