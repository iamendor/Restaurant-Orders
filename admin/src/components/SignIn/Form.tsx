"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Button from "../Button";
import Input from "../Input";
import styles from "@/app/signin/page.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const REGISTER = "";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = async (data) => {
    console.log("run");
    setError(null);
    const { ok, error: err } = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (!ok) {
      setError(err);
    }
    router.push("/dashboard");
  };
  return (
    <form className={styles.credentials} onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <p id={styles.error}>{error && error}</p>
      <Input
        error={errors?.email?.message}
        register={register("email", { required: "You must provide an email!" })}
      >
        <Image
          src="/signin/email.svg"
          width={30}
          height={30}
          alt="Restify Email Signin"
        />
      </Input>
      <Input
        error={errors?.password?.message}
        register={register("password", {
          required: "You must provide a password!",
          minLength: {
            value: 6,
            message: "Your password must be 6 character or longer!",
          },
        })}
        type="password"
      >
        <Image
          src="/signin/password.svg"
          width={30}
          height={30}
          alt="Restify Password Signin"
        />
      </Input>
      <p id={styles.new}>
        New user? <Link href={REGISTER}>Register</Link>
      </p>
      <Button type="submit" className={styles.submit}>
        Log in
      </Button>
    </form>
  );
};

export default Form;
