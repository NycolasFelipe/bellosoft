import styles from "./Button.module.css";

type Props = {
  title: string;
  alternative?: boolean;
  disabled?: boolean;
}

const Button = ({ title, alternative = false, disabled = false }: Props) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${alternative ? styles.alt : ""}
        ${disabled ? styles.disabled : ""}
      `}
      type="button"
      disabled={disabled}
    >
      {title}</button>
  );
}

export default Button;