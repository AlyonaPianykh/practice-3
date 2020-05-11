import React from "react";
import "./Button.scss";

const CN = "my-btn";
export const Button = props => {
  const {
    id,
    type = "button", // дефолтное значение = 'button'
    onClick,
    label = "Click me", // дефолтное значение = "Click me"
    className
  } = props;

  const onClickHandler = e => {
    onClick && onClick(e); // такая конструкция нужна, чтоб, если onClick в пропсах не прийдет, тут не выпала ошибка
  };

  return (
    <button
      className={`${CN} btn btn-primary add-margin ${className}`}
      id={id}
      onClick={onClickHandler}
      type={type}
    >
      {label}
    </button>
  );
};
