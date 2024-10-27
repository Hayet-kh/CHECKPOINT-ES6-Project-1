// https://www.codewars.com/kata/55c28f7304e3eaebef0000da

// Create a function that returns an array of all the numbers up to the input number.
const createArray = (number) => Array.from({ length: number }, (_, i) => i + 1);

// OR
// function createArray(number){
//     var newArray = [];

//     for(var counter = 1; counter <= number; counter++){
//       newArray.push(counter);
//     }

//     return newArray;
// }
