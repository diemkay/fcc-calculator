import React from 'react';
import { CalcView } from './CalcView';
import { getButtonType } from './getButton';
import { getButtonValue } from './getButton';
import { getButtonName } from './getButton';

const calculate = {
  '/': (input, secondOperand) => input / secondOperand,

  '*': (input, secondOperand) => input * secondOperand,

  '+': (input, secondOperand) => input + secondOperand,

  '-': (input, secondOperand) => input - secondOperand,

  '=': (input, secondOperand) => secondOperand,
};

export class CalcController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      input: null,
      waitingForSecondOperand: false,
      operator: null,
    };
  }

  handleClick = (event) => {
    const { innerText } = event.target;
    // const { input, operation, equation, displayValue } = this.state;

    const buttonType = getButtonType(innerText);
    const buttonValue = getButtonValue(innerText);
    const buttonName = getButtonName(innerText);

    if (buttonType === 'operand') {
      this.handleOperation(innerText);
      return;
    }

    if (buttonType === 'decimal') {
      this.addDecimal(buttonValue);
      return;
    }

    if (buttonName === 'clear') {
      this.handleReset();
      return;
    }

    this.addDigit(buttonValue);
  };

  addDigit = (number) => {
    if (this.state.waitingForSecondOperand === true) {
      this.setState({
        displayValue: number,
        waitingForSecondOperand: false,
      });
    } else
      this.setState({
        displayValue:
          this.state.displayValue === '0'
            ? number.toString()
            : this.state.displayValue + number.toString(),
      });
  };

  addDecimal = (dot) => {
    if (this.state.waitingForSecondOperand === true) return;

    if (!this.state.displayValue.includes(dot)) {
      this.setState({
        displayValue: this.state.displayValue + dot,
      });
    }
  };

  handleOperation = (nextOperator) => {
    const { input, displayValue, operator, waitingForSecondOperand } = this.state;
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
      this.setState({
        operator: nextOperator,
      });
      return;
    }

    if (input === null) {
      this.setState({
        input: inputValue,
      });
    } else if (operator) {
      const currentValue = input || 0;
      const result = calculate[operator](currentValue, inputValue);
      this.setState({
        displayValue: String(result),
        input: result,
      });
    }

    this.setState({
      waitingForSecondOperand: true,
      operator: nextOperator,
    });
  };

  handleReset = () => {
    this.setState({
      displayValue: '0',
      input: null,
      waitingForSecondOperand: false,
      operator: null,
    });
  };

  render() {
    const { input } = this.state;

    return (
      <CalcView
        handleClick={this.handleClick}
        handleReset={this.handleReset}
        displayValue={input}
      />
    );
  }
}
