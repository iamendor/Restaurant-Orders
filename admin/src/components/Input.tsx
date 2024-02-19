import styles from "@/src/styles/Input.module.scss";
export default function Input({
  register,
  type = "text",
  children,
  error,
}: {
  register: any;
  type?: string;
  error?: any;
  children?: React.ReactNode;
}) {
  const { name } = register;
  return (
    <div className={styles.input_cont}>
      <div className={`${styles.input} ${error && styles.error}`}>
        <input type={type} placeholder={name} {...register} ó />
        <div className={styles.icon}>{children}</div>
      </div>
      <p>{error}</p>
    </div>
  );
}
