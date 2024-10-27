// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// Return the next square if sq is a square, -1 otherwise
findNextSquare = (sq) =>
	Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
