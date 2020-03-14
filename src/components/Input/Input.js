import React, { useState } from "react";

export const Input = props => {
  const { value, onValueChange, type = "text" } = props;

  const onInputValueChange = e => {
    const {
      target: { value }
    } = e;
    onValueChange(value);
  };

  return (
    <div className="customInput">
      <input value={value} type={type} onChange={onInputValueChange} />
    </div>
  );
};
