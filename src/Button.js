import React from 'react';

export const Button = ({ content, divId, gridArea }) => {
  return (
    <div
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
