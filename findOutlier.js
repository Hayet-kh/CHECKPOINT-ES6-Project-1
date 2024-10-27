// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// Returns the single outlier integer from an array mostly of even or odd integers.
const findOutlier = (integers) =>
	integers.filter((num) => num % 2 === 0).length === 1
		? integers.find((num) => num % 2 === 0)
		: integers.find((num) => num % 2 !== 0);



// Another way to solve the problem
// function findOutlier(integers){
//     let even=0; let odd = 0;
//     Math.abs(integers[0] % 2) ? odd++ : even ++;
//     Math.abs(integers[1] % 2) ? odd++ : even ++;
//     Math.abs(integers[2] % 2) ? odd++ : even ++;

//     if(even>odd){
//         for(let i=0; i<integers.length; i++){
//             if(Math.abs(integers[i] % 2) === 1) return integers[i];
//         }
//     }else{
//         for(let i=0; i<integers.length; i++){
//             if(integers[i] % 2 === 0) return integers[i];
//         }
//     }
// }
