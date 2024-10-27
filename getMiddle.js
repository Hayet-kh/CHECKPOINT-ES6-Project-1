// https://www.codewars.com/kata/56747fd5cb988479af000028

// Return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
const getMiddle = (s) =>
	s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
