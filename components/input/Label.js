import React from "react";
import styles from "./label.module.scss";

export default function Label({ htmlFor, label, disabled }) {
  return (
    <label
      htmlFor={htmlFor}
      className={[styles.inputLabel, disabled ? styles.disabled : ""]
        .join(" ")
        .trim()}
    >
      {label}
    </label>
  );
}
