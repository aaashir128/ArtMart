import React from "react";
import styles from "./AuthLayout.module.css";
import { AuthLayoutProps } from "./@types";

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div className={styles["AuthLayout"]}>
      <div className={styles["AuthLayout-top"]}>
      

        <div className={styles["AuthLayout-top-help"]}>
     

       
        </div>
      </div>
      <div
        className={
          styles[
         ''
          ]
        }
      >
        <div
          className={
            styles[
           ''
            ]
          }
        >
        
        </div>
        <div className={styles["AuthLayout-right"]}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
