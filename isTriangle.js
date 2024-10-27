// https://www.codewars.com/kata/56606694ec01347ce800001b

// Return true if the given side lengths can form a triangle.
const isTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;
