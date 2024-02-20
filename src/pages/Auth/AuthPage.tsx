import React from "react";
import styles from "./AuthPage.module.css";
import { AuthPageProps } from "./@types";
import authLogo from "../../assets/authLogo.png";

const AuthPage = ({ children }: AuthPageProps) => {
  return (
    <div  className={styles["AuthPage"]}>
      <div className={styles["AuthPage-main"]}>
        <div className={styles["AuthPage-left"]}>
          <img src={authLogo} className={styles["authLogo"]} />
          <p className={styles["authText"]}>
            Empowering emerging artists to uplift the artist community
          </p>
        </div>
        <div className={styles["AuthPage-mid"]}></div>
        <div className={styles["AuthPage-right"]}>{children}</div>
      </div>
    </div>
  );
};

export default AuthPage;
