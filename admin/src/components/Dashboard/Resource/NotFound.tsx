import styles from "@/styles/Dashboard/Resource/NotFound.module.scss";
import Image from "next/image";

export default function NotFound({ what = undefined, className = "" }) {
  return (
    <div className={`${styles.notfound} ${className}`}>
      <Image
        src="/dashboard/response/notfound.svg"
        width={50}
        height={50}
        alt="Restify Error"
      />
      {what ? <p>{`${what} was not found!`}</p> : <h1>Not found!</h1>}
    </div>
  );
}
