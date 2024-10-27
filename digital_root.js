// https://www.codewars.com/kata/541c8630095125aba6000c00

// Return the digital root of a number
const digitalRoot = (n) =>
	n < 10
		? n
		: digitalRoot(
				n
					.toString()
					.split("")
					.reduce((acc, ele) => +acc + +ele, 0)
		  );
