import React from 'react';
import { Button } from './Button';

export const CalcView = () => {
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
      />
    );
  }

  return (
    <React.Fragment>
      <h2>Hello Calculator</h2>
      <div id="calculator-frame">
        <div id="calculator-face">
          <div id="display">1234567890</div>
          {allButtons}
        </div>
      </div>
    </React.Fragment>
  );
};

//    User Story #6: My calculator should contain an element to display values with a
//     corresponding id="display".
// id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
