import React from 'react';
import { CalcView } from './CalcView';
import { getButtonType, getButtonValue, getButtonName } from './getButton';

export class CalcController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      operation: '+',
      equation: [],
      isNegative: false,
    };
  }

  handleClick = (event) => {
    const { innerText } = event.target;
    const buttonType = getButtonType(innerText);
    const buttonValue = getButtonValue(innerText);
    const buttonName = getButtonName(innerText);

    if (buttonType === 'number') {
      this.appendDigit(buttonValue);
      return;
    }

    if (buttonName === 'clear') {
      this.handleReset();
      return;
    }

    if (buttonType === 'operation') {
      this.handleOperation(innerText);
    }

    if (buttonType === 'decimal') {
      this.appendDecimal(innerText);
    }
  };

  appendDigit = (number) => {
    this.setState((prevState) => ({
      ...prevState,
      input: !prevState.input ? number : prevState.input + number.toString(),
    }));
  };

  appendDecimal = (dot) => {
    if (!this.state.input.toString().includes(dot)) {
      this.setState({
        input: this.state.input + dot,
      });
    }
  };

  handleOperation = (nextOperator) => {
    const { operation, input } = this.state;
    // If input and operation are full, push their content to equation, which clears room for new input
    if (input && operation) {
      this.pushToEquation(input, operation);
    }
    if (!input && operation && nextOperator === '-') {
      this.setState({
        isNegative: !this.state.isNegative,
      });
      return;
    }

    if (input && nextOperator === '=') {
      this.calculateResult();
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      operation: nextOperator,
      isNegative: false,
    }));
  };

  handleReset = () => {
    this.setState({
      input: null,
      operation: '+',
      equation: [],
      isNegative: false,
    });
  };

  calculateResult = () => {
    this.setState((prevState) => {
      const { equation } = prevState;

      // 1. First pass: multiplication and division
      const interimEq = equation.reduce((acc, eqPart) => {
        // Copy add/subtract to new array
        if (eqPart.operation === '+' || eqPart.operation === '-') {
          return [...acc, eqPart];
        }

        const head = acc.slice(0, -1);
        const last = acc.slice(-1)[0];

        const result = {
          operation: last.operation,
          number:
            eqPart.operation === '*'
              ? eqPart.number * last.number
              : last.number / eqPart.number,
        };

        return [...head, result];
      }, []);

      // 2. Finally, adding and subtracting
      const finalResult = interimEq.reduce((acc, eqPart) => {
        return eqPart.operation === '+' ? acc + eqPart.number : acc - eqPart.number;
      }, 0);

      // fCC requires 4 decimal places of precision when rounding
      return {
        input: finalResult % 1 > 0 ? Number(finalResult.toFixed(4)) : finalResult,
        equation: [],
        operation: '+',
      };
    });
  };

  pushToEquation = (equationInput, equationOperation) => {
    this.setState((prevState) => ({
      equation: [
        ...prevState.equation,
        {
          operation: equationOperation,
          number: (prevState.isNegative ? -1 : 1) * Number(equationInput),
        },
      ],
      input: null,
      operation: null,
      isNegative: false,
    }));
  };

  render() {
    const { input } = this.state;
    console.log(this.state);

    return (
      <CalcView
        handleClick={this.handleClick}
        handleReset={this.handleReset}
        displayValue={input}
      />
    );
  }
}
