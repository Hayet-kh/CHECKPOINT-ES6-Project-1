// https://www.codewars.com/kata/55c933c115a8c426ac000082

// Return the result of the evaluation of the mathematical expression with the given object.
const evalObject = ({ operation, a, b }) =>
	operation === "+"
		? a + b
		: operation === "-"
		? a - b
		: operation === "/"
		? a / b
		: operation === "*"
		? a * b
		: operation === "%"
		? a % b
		: operation === "^"
		? Math.pow(a, b)
		: 0;
