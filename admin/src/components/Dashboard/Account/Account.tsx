"use client";
import apolloClient from "@/apollo";
import { genAuthHeaders } from "@/apollo/functions";
import { UPDATE_PASSWORD, UPDATE_PROFILE } from "@/apollo/mutations";
import { CURRENCIES } from "@/apollo/queries";
import Button from "@/components/Button";
import Close from "@/components/Close";
import Input, { DropdownInput } from "@/components/Input";
import styles from "@/styles/Dashboard/Account/Account.module.scss";
import { toastSuccess } from "@/utils/toast";
import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Error from "../Resource/Error";

const VIEW_MODE = "view";
const EDIT_MODE = "edit";
const PASSWORD_MODE = "password";

export default function Account({ info }) {
  const { data: session } = useSession();
  const [mode, setMode] = useState(VIEW_MODE);
  const [userInfo, setInfo] = useState(info);
  const [error, setError] = useState(null);
  const onError = (err) => setError(err.message);

  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    client: apolloClient,
    onError,
  });
  const [updatePassword] = useMutation(UPDATE_PASSWORD, {
    client: apolloClient,
    onError,
  });

  const { handleSubmit: handleEditSubmit, ...editForm } = useForm();
  const {
    handleSubmit: handlePasswordSubmit,
    setError: setPasswordError,
    ...passwordForm
  } = useForm();

  const closeEdit = () => setMode(VIEW_MODE);
  const onEditClick = () => setMode(EDIT_MODE);
  const onPasswordClick = () => setMode(PASSWORD_MODE);
  const onEditSubmit = (data) => {
    updateProfile({
      context: genAuthHeaders(session.jwt),
      variables: {
        update: data,
      },
    }).then((d) => {
      setInfo(data);
      setMode(VIEW_MODE);
      toastSuccess("Account updated!");
    });
  };
  const onPasswordSubmit = (data) => {
    const { old, password } = data;
    if (old == password)
      return setPasswordError("password", {
        type: "equal",
        message: "New password must be different!",
      });

    updatePassword({
      context: genAuthHeaders(session.jwt),
      variables: {
        update: data,
      },
    })
      .then((d) => {
        setMode(VIEW_MODE);
        toastSuccess("Password updated!");
      })
      .catch((e) => {
        if (e.message == "unauthorized")
          setPasswordError("old", {
            type: "unauth",
            message: "Invalid password!",
          });
      });
  };

  if (error)
    return (
      <Error
        error={error}
        ignore={() => setError(null)}
        className={styles.error}
      />
    );
  switch (mode) {
    case VIEW_MODE:
      return (
        <div className={styles.account}>
          <Details info={userInfo} onClick={onEditClick} />
        </div>
      );
    case EDIT_MODE:
      return (
        <form
          onSubmit={handleEditSubmit(onEditSubmit)}
          className={styles.account}
        >
          <Close onClick={closeEdit} />
          <Edit info={userInfo} form={editForm} onClick={onPasswordClick} />
        </form>
      );
    case PASSWORD_MODE:
      return (
        <form
          className={styles.account}
          onSubmit={handlePasswordSubmit(onPasswordSubmit)}
        >
          <Close onClick={closeEdit} />
          <EditPassword form={passwordForm} />
        </form>
      );
    default:
      return (
        <div className={styles.account}>
          <Details info={userInfo} onClick={onEditClick} />
        </div>
      );
  }
}

function Details({ info, onClick }) {
  const {
    name,
    email,
    currency: { name: currName },
    address: { city, country, zip, address1, address2 },
  } = info;
  return (
    <>
      <p className={styles.title}>{name}</p>
      <Image
        src="/dashboard/account/edit.svg"
        width={30}
        height={30}
        className={styles.toedit}
        onClick={onClick}
        alt="Restify Account Edit"
      />
      <div className={styles.email}>
        <p>Email</p>
        <span>{email}</span>
      </div>
      <div className={styles.currency}>
        <p>Currency</p>
        <span>{currName}</span>
      </div>
      <p className={styles.address}>Address</p>
      <div className={styles.country}>
        <p>Country</p>
        <span>{country}</span>
      </div>
      <div className={styles.city}>
        <p>City</p>
        <span>{city}</span>
      </div>
      <div className={styles.location}>
        <p>Location</p>
        <span>
          {zip} {address1}
          <br />
          {address2}
        </span>
      </div>
    </>
  );
}

function Edit({ info, form, onClick }) {
  const {
    name,
    email,
    currency: { name: currName },
    address: { country, city, zip, address1 },
  } = info;
  const {
    register,
    formState: { errors },
  } = form;

  const { data, error } = useQuery(CURRENCIES, {
    client: apolloClient,
  });
  const currencies = useMemo(() => {
    if (data && !error) return data.listCurrencies;
    return [currName];
  }, [data]);

  return (
    <>
      <p className={styles.title}>Edit</p>
      <div className={styles.changepw} onClick={onClick}>
        <Image
          src="/dashboard/account/password.svg"
          width={30}
          height={30}
          className={styles.topassword}
          alt="Restify Account Edit"
        />
        <label>Change password</label>
      </div>
      <Input
        default={name}
        className={styles.name}
        register={register("name", { required: true })}
        error={errors?.name}
      />
      <DropdownInput
        className={styles.currency}
        register={register("currency.name", { required: true })}
        options={currencies.map((curr) => curr.name)}
        error={errors?.currency?.name}
        default={currName}
      />
      <Input
        default={email}
        className={styles.email}
        register={register("email", { required: true })}
        error={errors?.email}
      />
      <Input
        default={country}
        className={styles.country}
        register={register("address.country", {
          required: true,
        })}
        placeholder="Country"
        error={errors?.address?.country}
      />
      <Input
        default={city}
        className={styles.city}
        register={register("address.city", {
          required: true,
        })}
        placeholder="City"
        error={errors?.address?.city}
      />
      <Input
        default={zip}
        className={styles.zip}
        register={register("address.zip", { required: true })}
        placeholder="Zip"
        error={errors?.address?.zip}
      />

      <Input
        default={address1}
        className={styles.address1}
        register={register("address.address1", {
          required: true,
        })}
        placeholder="Address1"
        error={errors?.address?.address1}
      />
      <Input
        default={info.address2 || ""}
        className={styles.address2}
        register={register("address.address2")}
        placeholder="Address2"
      />
      <Button type="submit" className={styles.submit}>
        Save
      </Button>
    </>
  );
}

function EditPassword({ form }) {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <p className={`${styles.title} ${styles.passwordtitle}`}>
        Change password
      </p>
      <Input
        type="password"
        className={`${styles.pwinput} ${styles.old}`}
        register={register("old", { required: true })}
        error={errors.old}
      />
      <Input
        type="password"
        className={`${styles.pwinput} ${styles.new}`}
        register={register("password", {
          required: true,
          minLength: {
            value: 6,
            message: "Password must be 6 characters long!",
          },
        })}
        placeholder="New"
        error={errors.password}
      />
      <Button type="submit" className={styles.submit}>
        Submit
      </Button>
    </>
  );
}
