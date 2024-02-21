import styles from "@/styles/Button.module.scss";

export default function Button({
  type,
  children,
  className,
  base = "primary",
}: {
  type: "button" | "submit";
  children: React.ReactNode;
  className?: any;
  base?: string;
}) {
  return (
    <button
      className={`${className} ${styles.button} ${styles[base]}`}
      type={type}
    >
      {children}
    </button>
  );
}
