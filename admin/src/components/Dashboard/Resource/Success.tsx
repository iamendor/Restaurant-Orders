import Image from "next/image";
import styles from "@/styles/Dashboard/Resource/Success.module.scss";

export default function Success({ message = undefined, className = "" }) {
  return (
    <div className={`${styles.success} ${className}`}>
      <Image
        src="/dashboard/response/success.svg"
        width={50}
        height={50}
        alt="Restify Error"
      />
      {message ? <p>{message}</p> : <h1>Success!</h1>}
    </div>
  );
}
