import styles from "@/styles/Button.module.scss";

export default function Button({
  type,
  children,
  className,
  base = "primary",
  onClick = () => {},
}: {
  type: "button" | "submit";
  children: React.ReactNode;
  className?: any;
  base?: string;
  onClick?: () => any;
}) {
  return (
    <button
      className={`${className} ${styles.button} ${styles[base]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
