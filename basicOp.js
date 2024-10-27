// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// Return the result of the operation
const basicOp = (operation, value1, value2) =>
	operation === "+"
		? value1 + value2
		: operation === "-"
		? value1 - value2
		: operation === "*"
		? value1 * value2
		: operation === "/"
		? value1 / value2
		: 0;

// OR
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }
