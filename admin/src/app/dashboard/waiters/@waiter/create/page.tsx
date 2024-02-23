"use client";
import Input, { DiceBearInput, DropdownInput } from "@/components/Input";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useMutation } from "@apollo/client";
import { CREATE_WAITER } from "@/apollo/mutations";
import apolloClient from "@/apollo";
import { useSession } from "next-auth/react";
import { genAuthHeaders } from "@/apollo/functions";
import { DEFAULT_ICON } from "@/utils/defaults";
import { useRouter } from "next/navigation";
import { WAITERS } from "@/apollo/queries";
import Loading from "@/components/Loading";
import { toastSuccess } from "@/utils/toast";
import Error from "@/components/Dashboard/Resource/Error";

export const defaultValues = {
  name: undefined,
  profileIcon: DEFAULT_ICON,
  email: undefined,
  gender: undefined,
  password: undefined,
};

export default function CreateWaiter() {
  const {
    register,
    setValue,
    handleSubmit,
    setError: setFormError,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const [error, setError] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();
  const [createWaiter, { loading }] = useMutation(CREATE_WAITER, {
    client: apolloClient,
    refetchQueries: [WAITERS],
    onQueryUpdated: (ob) => {
      return ob.refetch();
    },
    onCompleted: ({ createWaiter }) => {
      console.log("complete");
      router.push(`/dashboard/waiters?id=${createWaiter.id}`);
    },
    onError: (error) => {
      error.message == "unique field failed" &&
        setFormError("email", {
          type: "unique",
          message: "Email is already in use!",
        });

      return setError(error.message);
    },
  });

  useEffect(() => {
    register("profileIcon");
  }, []);

  const onSubmit = (data) => {
    createWaiter({
      context: genAuthHeaders(session.jwt),
      variables: {
        data,
      },
    }).then(
      ({ data }) =>
        data && toastSuccess(`${data.createWaiter.name} created successfully!`)
    );
  };

  if (error) return <Error error={error} />;
  if (!session || loading) return <Loading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.create}>
      <DiceBearInput
        setValue={(val) => setValue("profileIcon", val)}
        className={styles.profileIcon}
        def={DEFAULT_ICON}
      />
      <Input
        register={register("name", { required: true })}
        className={styles.name}
        error={errors.name}
      />
      <Input
        register={register("email", { required: true })}
        className={styles.email}
        error={errors.email}
      />
      <DropdownInput
        className={styles.gender}
        register={register("gender", { required: true })}
        options={["male", "female"]}
        error={errors.gender}
      />
      <Input
        register={register("password", {
          required: true,
          minLength: {
            value: 6,
            message: "Password must be 6 characters long!",
          },
        })}
        type="password"
        className={styles.password}
        error={errors.password}
      />
      <Button type="submit" className={styles.submit}>
        Submit
      </Button>
    </form>
  );
}
