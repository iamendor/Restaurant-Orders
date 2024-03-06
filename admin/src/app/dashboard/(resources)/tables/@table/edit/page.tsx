"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "@/components/Button";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_TABLE } from "@/apollo/mutations";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import { TABLE, TABLES } from "@/apollo/queries";
import Loading from "@/components/Loading";
import { toastSuccess } from "@/utils/toast";
import Error from "@/components/Dashboard/Resource/Error";
import Success from "@/components/Dashboard/Resource/Success";
import useResource from "@/utils/useresource";
import useCanQuery from "@/utils/usecanquery";

export default function CreateWaiter() {
  const { error, setError, router, id, session, params } = useResource();
  const canQuery = useCanQuery();

  const { data, loading: tableLoading } = useQuery(TABLE, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    variables: {
      where: {
        id: Number(id),
      },
    },
    skip: !canQuery,
  });

  const {
    register,
    handleSubmit,
    setError: setFormError,
    formState: { errors },
  } = useForm({
    defaultValues: { name: data?.table.name },
  });

  const [updateTable, { loading: updateLoading, data: updated }] = useMutation(
    UPDATE_TABLE,
    {
      client: apolloClient,
      refetchQueries: [TABLES],
      onQueryUpdated: (ob) => ob.refetch(),
      onCompleted: ({ updateTable }) => {
        !error && router.push(`/dashboard/tables?id=${updateTable.id}`);
      },
      onError: (error) => {
        if (error.message == "unique field failed")
          return setFormError("name", {
            type: "unique",
            message: "Name is already in use!",
          });

        return setError(error.message);
      },
    }
  );

  const onSubmit = (form) => {
    //TODO: object match
    const { password, ...data } = form;
    updateTable({
      context: genAuthHeaders(session.jwt),
      variables: {
        data: {
          where: { id: Number(id) },
          update: data,
        },
      },
    }).then(
      ({ data }) =>
        data && toastSuccess(`${data.updateTable.name} updated successfully!`)
    );
  };

  useEffect(() => setError(null), [params]);

  if (error) return <Error error={error} ignore={() => setError(null)} />;
  if (!session || tableLoading || updateLoading || !data) return <Loading />;
  if (updated) return <Success />;

  const { table } = data;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.edit}>
      <h1>Edit</h1>
      <Input
        register={register("name")}
        className={styles.name}
        error={errors.name}
        default={table.name}
      />

      <Button type="submit" className={styles.submit}>
        Submit
      </Button>
    </form>
  );
}
