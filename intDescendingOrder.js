// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Return descending order of a number
const descendingOrder = (n) =>
	+(n + "")
		.split("")
		.sort(function (a, b) {
			return b - a;
		})
		.join("");
