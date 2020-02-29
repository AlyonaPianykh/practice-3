import React from 'react';
import './Button.scss';

const CN = 'my-btn';
export const Button = (props) => {
  const {
    id,
    type = 'button',
    onClick,
    label = "Click me",
    className
  } = props;

  return (
    <button
      className={`${CN} btn btn-primary add-margin ${className}`}
      id={id}
      onClick={onClick}
      type={type}
    >{label}</button>
  );
};