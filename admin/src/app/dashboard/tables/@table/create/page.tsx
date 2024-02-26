"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import { useMutation } from "@apollo/client";
import { CREATE_TABLES } from "@/apollo/mutations";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import Error from "@/components/Dashboard/Resource/Error";
import Loading from "@/components/Loading";
import { TABLES } from "@/apollo/queries";
import Success from "@/components/Dashboard/Resource/Success";
import { toastSuccess } from "@/utils/toast";
import useResource from "@/utils/useresource";

export default function CreateTable() {
  const { setError, session, error, router } = useResource();

  const [tables, setTables] = useState([]);
  const nameRef = useRef(null);
  const [createTables, { loading, data: created }] = useMutation(
    CREATE_TABLES,
    {
      client: apolloClient,
      context: genAuthHeaders(session?.jwt),
      onQueryUpdated: (ob) => ob.refetch(),
      onError: (err) => {
        if (err.message == "unique field failed") {
          return setError("Duplicated tables!");
        }
        return setError(err.message);
      },
      refetchQueries: [TABLES],
      onCompleted: () => router.push("/dashboard/tables"),
    }
  );

  const onSubmit = () => {
    if (tables.length == 0) return;
    createTables({ variables: { data: tables } }).then(() =>
      toastSuccess("Tables created succesfully!")
    );
  };

  const onAdd = () => {
    if (!nameRef.current || nameRef?.current?.value == "") return;
    const data = { name: nameRef.current.value };
    if (tables.map((tab) => tab.name).includes(data.name)) {
      nameRef.current.value = null;
      return;
    }
    setTables([...tables, data]);
    nameRef.current.value = null;
  };

  const onRemove = (index) => {
    setTables((tabs) => {
      const tab = tabs[index];
      return tabs.filter((v) => v.name != tab.name);
    });
  };

  const onChange = (e) => {
    return e.key == "Enter" && onAdd();
  };

  if (loading || !session) return <Loading />;
  if (error) return <Error error={error} ignore={() => setError(null)} />;
  if (created) return <Success />;

  return (
    <>
      <div className={styles.create}>
        <Input
          register={{ ref: nameRef, name: "Name" }}
          className={styles.input}
          onChange={onChange}
        />
        <button className={styles.add} onClick={onAdd}>
          <Image
            src="/dashboard/actions/add.svg"
            width={20}
            height={50}
            alt="Restify Table Add"
          />
        </button>
      </div>
      <TableList tables={tables} onRemove={onRemove} />
      <Button
        onClick={onSubmit}
        type="button"
        base="accent"
        className={styles.submit}
      >
        Submit
      </Button>
    </>
  );
}

const TableList = ({ tables, onRemove }) => {
  return (
    <div className={styles.tocreate}>
      {tables.map((tab, i) => (
        <div className={styles.table} key={tab.name}>
          <p> {tab.name}</p>
          <Image
            src="/dashboard/account/x.svg"
            width={15}
            height={15}
            alt="Restify table del"
            onClick={() => onRemove(i)}
          />
        </div>
      ))}
    </div>
  );
};
