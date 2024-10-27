// https://www.codewars.com/kata/544aed4c4a30184e960010f4

// Return the divisors of a number
const divisors = (integer) => {
	var res = [];
	for (var i = 2; i <= Math.floor(integer / 2); ++i)
		if (integer % i == 0) res.push(i);
	return res.length ? res : integer + " is prime";
};
