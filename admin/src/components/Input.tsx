import styles from "@/styles/Input.module.scss";
export default function Input({
  register,
  type = "text",
  children,
  error,
  className,
  default: def = "",
  placeholder,
}: {
  register: any;
  type?: string;
  error?: any;
  children?: React.ReactNode;
  className?: string;
  default?: string;
  placeholder?: string;
}) {
  const name = placeholder || register.name;
  return (
    <div className={`${className} ${styles.input_cont}`}>
      <div className={`${styles.input} ${error && styles.error}`}>
        <input
          defaultValue={def}
          type={type}
          placeholder={name}
          {...register}
        />
        <div className={styles.icon}>{children}</div>
      </div>
      <p>{error?.message}</p>
    </div>
  );
}

export function ToggleInput({
  register,
  default: def = "",
  onChange = () => {},
}) {
  return (
    <label className={styles.toggle}>
      <input
        onClick={onChange}
        defaultChecked={def}
        type="checkbox"
        {...register}
      />
      <span className={styles.switch}></span>
    </label>
  );
}

export function DropdownInput({
  options,
  register,
  className = "",
  default: def = "",
  error,
}) {
  return (
    <div className={`${className} ${styles.dropdown} `}>
      <select
        {...register}
        defaultValue={def}
        className={error && styles.error}
      >
        {options.map((o, i) => (
          <DropdownItem option={o} key={i} />
        ))}
      </select>
    </div>
  );
}

function DropdownItem({ option }) {
  return (
    <option value={option} className={styles.item}>
      {option}
    </option>
  );
}
