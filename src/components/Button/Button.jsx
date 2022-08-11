import React from 'react';

export const Button = ({ title, type, handleClick }) => {
  return (
    <div id="button" className="row">
      <button type={type} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};
