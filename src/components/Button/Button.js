import React from "react";
import s from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
