// import './utils.js';
//can just grab what you're using even if utils.js is exporting more than one
//order does not matter
// import { add, square } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));

import { isAdult, canDrink } from './person.js';

console.log('Adult? ', isAdult(18));
console.log('Can drink? ', canDrink(30));
