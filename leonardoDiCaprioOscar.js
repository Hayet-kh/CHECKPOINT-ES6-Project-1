// https://www.codewars.com/kata/56d49587df52101de70011e4

// Return the Leonardo DiCaprio's oscar
const leo = (oscar) =>
	oscar === 88
		? "Leo finally won the oscar! Leo is happy"
		: oscar === 86
		? "Not even for Wolf of wallstreet?!"
		: oscar < 88
		? "When will you give Leo an Oscar?"
		: "Leo got one already!";
