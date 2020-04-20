# A simple React Calculator

I had to build a calculator for the freeCodeCamp Frontend Frameworks track, so I chose to build it with React.

The fCC assignment notes:

> There are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable.

EXAMPLE: `3 + 5 x 6 - 2 / 4` =

- Immediate Execution Logic: `11.5`
- Formula/Expression Logic: `32.5`

## Approach & Features

- The calculator uses formula/expression logic, not immediate execution
- The calculator has four digits of decimal precision when dealing with fractions
- Numbers and operations are stored as separate equation parts in an array. It needs two passes to properly address order of operation precedence
- The calculator doesn't make use of `eval` or libraries
- There are no plans to add new features in the near future (e.g. square root, etc.)

## Lessons learned

- Simplicity is hard. Things that _look_ simple disguise their complexity (especially when you're new to code)
- Avoiding [eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and libraries is the path of most resistance, but also gave birth to some epic struggles. It's rare to find a tutorial that doesn't defer to eval. Some opinions say this is fine for a calculator app, but there's an argument for not learning a tool that you wouldn't want to use in many other contexts given its risks.
- [DuckDuckGo's calculator](https://github.com/duckduckgo/zeroclickinfo-goodies/tree/master/share/goodie/calculator) is very cute.

## Credits

Made with [Create React App](https://github.com/facebook/create-react-app).
