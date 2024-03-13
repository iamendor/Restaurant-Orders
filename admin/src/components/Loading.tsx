import { ThreeCircles } from "react-loader-spinner";
import styles from "@/styles/Loading.module.scss";

export default function Loading() {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#213e60"
      ariaLabel="three-circles-loading"
      wrapperClass={styles.loading}
    />
  );
}
