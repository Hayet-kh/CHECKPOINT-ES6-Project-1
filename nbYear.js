// https://www.codewars.com/kata/563b662a59afc2b5120000c6

// Returns the number of years for a population to reach or exceed a target value, rounding down each year.
const nbYear = (p0, percent, aug, p) => {
	let count = 0;
	while (p0 < p) {
		p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
		count++;
	}
	return count;
};
