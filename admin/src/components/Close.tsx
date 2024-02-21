import styles from "@/styles/Close.module.scss";
import Image from "next/image";

export default function Close({ onClick = () => {} }) {
  return (
    <Image
      onClick={onClick}
      src="/dashboard/account/x.svg"
      className={styles.close}
      width={50}
      height={50}
      alt="Restify Close X"
    />
  );
}
