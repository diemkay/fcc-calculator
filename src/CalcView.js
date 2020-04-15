import React from 'react';
import { Button } from './Button';

export const CalcView = ({ handleClick, displayValue }) => {
  const buttons = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '=': 'equals',
    '+': 'add',
    '-': 'subtract',
    '/': 'divide',
    '*': 'multiply',
    AC: 'clear',
    '.': 'decimal',
  };

  const allButtons = [];

  for (const button in buttons) {
    allButtons.push(
      <Button
        key={button}
        divId={buttons[button]}
        content={button}
        gridArea={buttons[button]}
        onClick={handleClick}
      />
    );
  }

  return (
    <React.Fragment>
      <h1>Hello Calculator</h1>
      <div id="calculator-frame">
        <div id="calculator-face">
          <div id="display">{displayValue}</div>
          {allButtons}
        </div>
      </div>
    </React.Fragment>
  );
};
