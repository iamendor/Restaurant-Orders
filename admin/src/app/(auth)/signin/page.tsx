import Image from "next/image";
import styles from "./page.module.scss";
import Form from "@/components/SignIn/Form";

export default async function SignIn() {
  return (
    <div className={styles.signin}>
      <Form />
      <div className={styles.title}>
        <Image
          className={styles.image}
          src="/signin/signin.png"
          width={700}
          height={1000}
          alt="Restify Admin Login page signin"
        />
        <div className={styles.content}>
          <p>Restify</p>
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}
