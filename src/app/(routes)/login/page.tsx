'use client';
import { useState } from "react";
import { redirect } from "next/navigation";
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

export default function Login() {
  const [email, setEmail] = useState<ValidField>({ valid: false });
  const [password, setPassword] = useState<ValidField>({ valid: false });

  return (
    <div className={styles.container}>
      <div className={styles.return}>
        <button type="button"><FaCircleArrowLeft /></button>
      </div>
      <div className={styles.header}>
        <h2>Login</h2>
        <p>Welcome back!</p>
        <p>Please login to continue</p>
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
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              setInputValid={setPassword}
            />
          </div>
          <div className={styles.buttons}>
            <Button title="Login" disabled={(email.valid && password.valid) ? false : true} />
            <Button title="Forgot Password" alternative={true} />
          </div>
        </form>
      </div>
      <div className={styles.login_social}>
        <h3>Or Continue with Social Accounts</h3>
        <div className={styles.buttons}>
          <ButtonLoginSocial title="Google" />
          <ButtonLoginSocial title="Facebook" />
          <ButtonLoginSocial title="Apple" />
          <ButtonLoginSocial title="Twitter" />
        </div>
      </div>
      <div className={styles.create_account}>
        <h3 style={{ visibility: 'hidden' }}>Create account</h3>
        <p>Don't have an account? <span><Link href="/create"> Create Now</Link></span></p>
      </div>
    </div>
  );
}
