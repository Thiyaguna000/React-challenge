import React from 'react';

export const Input = ({ description, type, placeholder, inputHandler }) => {
  return (
    <div className="row">
      <label>{description}</label>
      <input type={type} placeholder={placeholder} onChange={inputHandler} />
    </div>
  );
};
