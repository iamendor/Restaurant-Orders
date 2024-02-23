"use client";
import Input, { DiceBearInput, DropdownInput } from "@/components/Input";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import Button from "@/components/Button";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_WAITER, UPDATE_WAITER_PASSWORD } from "@/apollo/mutations";
import apolloClient from "@/apollo";
import { useSession } from "next-auth/react";
import { genAuthHeaders } from "@/apollo/functions";
import { DEFAULT_ICON } from "@/utils/defaults";
import { useRouter, useSearchParams } from "next/navigation";
import { WAITER, WAITERS } from "@/apollo/queries";
import Loading from "@/components/Loading";
import { toastSuccess } from "@/utils/toast";
import { defaultValues } from "../create/page";
import Error from "@/components/Dashboard/Resource/Error";

export default function CreateWaiter() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const params = useSearchParams();
  const { data: session } = useSession();
  const id = params.get("id");
  const [updateWaiter, { loading: updateLoading }] = useMutation(
    UPDATE_WAITER,
    {
      client: apolloClient,
      refetchQueries: [WAITERS],
      onQueryUpdated: (ob) => {
        return ob.refetch();
      },
      onCompleted: ({ updateWaiter }) => {
        !error && router.push(`/dashboard/waiters?id=${updateWaiter.id}`);
      },
      onError: (error) => {
        if (error.message == "unique field failed")
          return setFormError("email", {
            type: "unique",
            message: "Email is already in use!",
          });

        return setError(error.message);
      },
    }
  );
  const [updateWaiterPassword, { loading: passwordLoading }] = useMutation(
    UPDATE_WAITER_PASSWORD,
    {
      client: apolloClient,
      onError: (err) => setError(err.message),
    }
  );

  const { data, loading: waiterLoading } = useQuery(WAITER, {
    client: apolloClient,
    context: genAuthHeaders(session?.jwt),
    variables: {
      where: {
        id: Number(id),
      },
    },
  });
  const waiter = useMemo(() => {
    if (data) {
      const {
        waiterInfo: { profileIcon, name, email, gender },
      } = data;
      console.log(profileIcon);
      return {
        profileIcon,
        name,
        email,
        gender,
        password: undefined,
      };
    }
    return defaultValues;
  }, [data]);

  const {
    register,
    setValue,
    handleSubmit,
    setError: setFormError,
    formState: { errors },
  } = useForm({
    defaultValues: waiter,
  });

  const onSubmit = (form) => {
    //TODO: object match
    const { password, ...data } = form;
    updateWaiter({
      context: genAuthHeaders(session.jwt),
      variables: {
        data: {
          where: { id: Number(id) },
          update: data,
        },
      },
    }).then(
      ({ data }) =>
        data && toastSuccess(`${data.updateWaiter.name} updated successfully!`)
    );
    if (password) {
      updateWaiterPassword({
        context: genAuthHeaders(session.jwt),
        variables: {
          data: {
            where: { id: Number(id) },
            update: { password },
          },
        },
      });
    }
  };

  useEffect(() => {
    register("profileIcon");
  }, []);

  useEffect(() => setError(null), [params]);

  if (error) return <Error error={error} ignore={() => setError(null)} />;
  if (!session || waiterLoading || updateLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.create}>
      <DiceBearInput
        setValue={(val) => setValue("profileIcon", val)}
        className={styles.profileIcon}
        def={waiter.profileIcon || DEFAULT_ICON}
      />
      <Input
        register={register("name")}
        className={styles.name}
        error={errors.name}
        default={waiter.name}
      />
      <Input
        register={register("email")}
        className={styles.email}
        error={errors.email}
        default={waiter.email}
      />
      <DropdownInput
        className={styles.gender}
        register={register("gender")}
        options={["male", "female"]}
        error={errors.gender}
        default={waiter.gender}
      />
      <Input
        register={register("password", {
          minLength: {
            value: 6,
            message: "Password must be 6 characters long!",
          },
        })}
        type="password"
        className={styles.password}
        error={errors.password}
        placeholder="Password (Optional)"
      />
      <Button type="submit" className={styles.submit}>
        Submit
      </Button>
    </form>
  );
}
