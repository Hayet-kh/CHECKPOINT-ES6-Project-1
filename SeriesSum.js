// https://www.codewars.com/kata/555eded1ad94b00403000071

// Return the sum of following series up to nth term(parameter).
const SeriesSum = (n) =>
	Array.from({ length: n }, (_, i) => 1 / (1 + i * 3))
		.reduce((s, val) => s + val, 0)
		.toFixed(2);

// OR
// function SeriesSum(n) {
//     for (var s = 0, i = 0; i < n; i++) {
//       s += 1 / (1 + i * 3)
//     }
//     return s.toFixed(2)
// }
