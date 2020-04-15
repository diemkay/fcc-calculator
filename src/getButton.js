const buttons = {
  '0': {
    name: 'zero',
    type: 'number',
    value: 0,
  },
  '1': {
    name: 'one',
    type: 'number',
    value: 1,
  },
  '2': {
    name: 'two',
    type: 'number',
    value: 2,
  },
  '3': {
    name: 'three',
    type: 'number',
    value: 3,
  },
  '4': {
    name: 'four',
    type: 'number',
    value: 4,
  },
  '5': {
    name: 'five',
    type: 'number',
    value: 5,
  },
  '6': {
    name: 'six',
    type: 'number',
    value: 6,
  },
  '7': {
    name: 'seven',
    type: 'number',
    value: 7,
  },
  '8': {
    name: 'eight',
    type: 'number',
    value: 8,
  },
  '9': {
    name: 'nine',
    type: 'number',
    value: 9,
  },
  '.': {
    name: 'decimal',
    type: 'decimal',
    value: '.',
  },
  '*': {
    name: 'multiply',
    type: 'operand',
  },
  '/': {
    name: 'divide',
    type: 'operand',
    // operation: (firstOperand, secondOperand) => firstOperand / secondOperand,
  },
  '+': {
    name: 'add',
    type: 'operand',
  },
  '-': {
    name: 'subtract',
    type: 'operand',
  },
  '=': {
    name: 'equals',
    type: 'operand',
  },
  AC: {
    name: 'clear',
  },
};

export const getButtonType = (button) => {
  return buttons[button].type;
};

export const getButtonValue = (button) => {
  return buttons[button].value;
};

export const getButtonName = (button) => {
  return buttons[button].name;
};
