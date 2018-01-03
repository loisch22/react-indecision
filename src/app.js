//default goes before named exports
//default special - doesn't have to use 'subtract' since its the default, you can name it whatever you want
import subtract, { add, square } from './utils.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 10));

// import { isAdult, canDrink } from './person.js';
//
// console.log('Adult? ', isAdult(18));
// console.log('Can drink? ', canDrink(30));
