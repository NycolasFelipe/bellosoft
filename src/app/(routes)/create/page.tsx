'use client';
import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import ButtonLoginSocial from "@/app/components/button_login_social/ButtonLoginSocial";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import styles from "./page.module.css";

type ValidField = {
  valid: boolean;
  msg?: string;
}

export default function CreateAccount() {
  const [email, setEmail] = useState<ValidField>({ valid: false });
  const [phone, setPhone] = useState<ValidField>({ valid: false });
  const [password, setPassword] = useState<ValidField>({ valid: false });

  return (
    <div className={styles.container}>
      <div className={styles.return}>
        <button type="button"><FaCircleArrowLeft /></button>
      </div>
      <div className={styles.header}>
        <h2>Create Account</h2>
        <p>Enter your information below or continue <br /> with social media account</p>
      </div>
      <div className={styles.form}>
        <form method="POST" action="">
          <div className={styles.inputs}>
            <Input
              id="email"
              type="email"
              label="Email Address"
              placeholder="Your email address"
              setInputValid={setEmail}
            />
            <Input
              id="phone"
              type="phone"
              label="Mobile Number"
              placeholder="Your mobile number"
              setInputValid={setPhone}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Create password"
              setInputValid={setPassword}
            />
          </div>
          <div className={`${styles.password_strength} ${styles[password.msg as string]} `}>
            {password.msg === "strong" ? "Strong password" : ""}
            {password.msg === "medium" ? "Medium password" : ""}
            {password.msg === "weak" ? "Weak password" : ""}
          </div>
          <div className={styles.buttons}>
            <Button
              title="Create Account"
              disabled={(email.valid && phone.valid && password.valid) ? false : true}
            />
          </div>
        </form>
      </div>
      <div className={styles.login_social}>
        <h3>Or Register with Social Accounts</h3>
        <div className={styles.buttons}>
          <ButtonLoginSocial title="Google" />
          <ButtonLoginSocial title="Facebook" />
          <ButtonLoginSocial title="Apple" />
          <ButtonLoginSocial title="Twitter" />
        </div>
      </div>
      <div className={styles.create_account}>
        <h3 style={{ visibility: 'hidden' }}>Create account</h3>
        <p>Already have an account? <span><Link href="/login"> Login Now</Link></span></p>
      </div>
    </div>
  );
}
