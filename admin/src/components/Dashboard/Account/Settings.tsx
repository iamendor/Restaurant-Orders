"use client";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import { UPDATE_SETTINGS } from "@/apollo/mutations";
import Button from "@/components/Button";
import { ToggleInput } from "@/components/Input";
import styles from "@/styles/Dashboard/Account/Settings.module.scss";
import { toastSuccess } from "@/utils/toast";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Settings({ settings }) {
  const { data: session } = useSession();
  const [info, setInfo] = useState(settings);
  const [canUpdate, setUpdate] = useState(false);

  const [updateSettings] = useMutation(UPDATE_SETTINGS, {
    client: apolloClient,
  });

  const { register, handleSubmit } = useForm();
  const { enableAnalytics } = info;
  const onSubmit = (data) => {
    //TODO: object equality
    updateSettings({
      context: genAuthHeaders(session.jwt),
      variables: {
        update: data,
      },
    }).then(() => {
      toastSuccess("Settings updated!");
      setUpdate(false);
    });
  };

  const onInputChange = () => {
    if (!canUpdate) setUpdate(true);
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.settings}>
      <p className={styles.title}>Settings</p>
      <div className={styles.analytics}>
        <div className={styles.details}>
          <p>Enable analytics</p>
          <span>
            Daily summarize of income, best workers and popular products
          </span>
        </div>
        <ToggleInput
          onChange={onInputChange}
          default={enableAnalytics}
          register={register("enableAnalytics")}
        />
      </div>
      {canUpdate && (
        <Button className={styles.submit} type="submit">
          Save changes
        </Button>
      )}
    </form>
  );
}
