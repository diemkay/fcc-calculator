import React from 'react';

export const Button = ({ content, divId, gridArea, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="button"
      id={divId}
      style={{
        gridArea: `${gridArea}`,
      }}
    >
      {content}
    </div>
  );
};
