// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

// Remove the smallest number from an array of numbers and return the new array.
const removeSmallest = (numbers) => 
    numbers.length === 0 ? [] : [
        ...numbers.slice(0, numbers.indexOf(Math.min(...numbers))),
        ...numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1),
    ];


