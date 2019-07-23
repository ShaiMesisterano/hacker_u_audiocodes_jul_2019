// function add(incrementor) {
//     return function(number) {
//         return number + incrementor;
//     }
// }

// const add = incrementor => {
//     return number => { 
//         return number + incrementor;
//     }
// }

const add = incrementor => number => number + incrementor;

const add3 = add(3);
const add5 = add(5);

console.log(add3(10));
console.log(add5(10));