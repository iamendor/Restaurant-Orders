"use client";
import Error from "@/components/Dashboard/Resource/Error";
import styles from "./error.module.scss";
import Image from "next/image";

export default function AppError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={`${styles.error}`}>
      <Image
        onClick={reset}
        src="/dashboard/response/error.svg"
        width={200}
        height={200}
        alt="Restify Error"
      />
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}
