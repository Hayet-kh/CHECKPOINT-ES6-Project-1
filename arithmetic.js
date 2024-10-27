// https://www.codewars.com/kata/583f158ea20cfcbeb400000a

// Return the result of the arithmetic operation with the given numbers and operator.
const arithmetic = (a, b, operator) =>
	operator === "add"
		? a + b
		: operator === "subtract"
		? a - b
		: operator === "multiply"
		? a * b
		: operator === "divide"
		? a / b
		: undefined;
