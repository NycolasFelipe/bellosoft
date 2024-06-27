import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { VscEye } from "react-icons/vsc";
import { IoWarningOutline } from "react-icons/io5";
import { maskPhone } from "@/app/scripts/maskPhone";
import validateEmail from "@/app/scripts/validateEmail";
import styles from "./Input.module.css";
import validatePassword from "@/app/scripts/validatePassword";

type Props = {
  id: string;
  type: "email" | "password" | "phone";
  setInputValid: (value: ValidField) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

type ValidField = {
  valid: boolean;
  msg?: string;
}

const Input = ({ id, type, setInputValid, label = "label", placeholder = "placeholder", required = true }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [emailWarningVisible, setEmailWarningVisible] = useState<boolean>(false);

  // Define ícone de acordo com o tipo do input
  let icon: ReactNode;
  switch (type) {
    case "email":
      icon = <Image src={"icon/icon_email.svg"} alt={"email icon"} width={20} height={20} />
      break;
    case "password":
      icon = <Image src={"icon/icon_password.svg"} alt={"password icon"} width={20} height={20} />
      break;
    case "phone":
      icon = <Image src={"icon/icon_phone.svg"} alt={"phone icon"} width={20} height={20} />
      break;
    default:
      break;
  }

  // Verifica se o email digitado é válido
  const handleEmail = (email: string) => {
    // Se o email for válido
    if (validateEmail(email)) {
      // Esconde o texto de aviso e envia validação para o componente pai
      setEmailWarningVisible(false);
      setInputValid({ valid: true });
      return;
    }
    // Se o email for inválido
    setEmailWarningVisible(true);
    setInputValid({ valid: false });
  }

  // Verifica se a senha possui o número mínimo de caracteres
  const handlePassword = (password: string) => {
    const strength = validatePassword(password);
    if (strength === "medium" || strength == "strong") {
      // Se a senha for válida, envia validação para o componente pai
      setInputValid({ valid: true, msg: strength });
      return;
    }
    setInputValid({ valid: false, msg: strength });
  }

  const handlePhone = (e: HTMLInputElement) => {
    // Formata input para o formato (xx) xxxxx-xxxx
    e.value = maskPhone(e.value);
    if (e.value.length === 15) {
      setInputValid({ valid: true });
      return;
    }
    setInputValid({ valid: false });
  }

  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <label className={styles.label} htmlFor={id}>{label}</label>

      {/* Email Input */}
      {type === "email" && (
        <>
          <span className={`${styles.email_warning} ${emailWarningVisible ? styles.visible : ""}`}>
            <IoWarningOutline />Wrong email address
          </span>
          <input
            type="email"
            className={styles.input}
            name={id}
            id={id}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handleEmail(e.target.value)}
          />
        </>
      )}

      {/* Password Input */}
      {type === "password" && (<>
        <input
          type={passwordVisible ? "text" : "password"}
          className={styles.input}
          name={id}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <span
          className={`${styles.password_eye} ${passwordVisible ? styles.visible : ""}`}
          onClick={() => setPasswordVisible(prev => !prev)}
        >
          <Image
            className={styles.eye_visible}
            src={"icon/icon_eye.svg"}
            alt="Toggle password visible"
            width={20}
            height={20}
          />
          <VscEye className={styles.eye_hide} />
        </span>
      </>
      )}

      {/* Phone Input */}
      {type === "phone" && (
        <>
          <input
            type="text"
            className={styles.input}
            name={id}
            id={id}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handlePhone(e.target)}
          />
        </>
      )}

    </div>
  );
}

export default Input;