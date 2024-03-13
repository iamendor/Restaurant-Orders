import styles from "@/styles/Dashboard/Resource/Error.module.scss";
import Image from "next/image";

export default function Error({ error, className = "", ignore = () => {} }) {
  return (
    <div className={`${styles.error} ${className}`}>
      <Image
        onClick={ignore}
        src="/dashboard/response/error.svg"
        width={50}
        height={50}
        alt="Restify Error"
      />
      <h1>Error!</h1>
      <p>{error}</p>
    </div>
  );
}
