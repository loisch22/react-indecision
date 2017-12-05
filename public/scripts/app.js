'use strict';

//es5 function
// const square = function (x) {
//     return x * x;
// };
//es5 can name function
function square(x) {
    return x * x;
}

console.log(square(8));

//es6 arrow function (can put functions, can put whatever inside)
//can't name function aka anonymous function
//have to assign to variable like const/let

// const squareArrow = (x) => {
//     return x * x;
// };


//arrow function expression syntax
//arrow function that only returns can use:

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(2));

//regular arrow function practice

// const fullName = 'Andrew Mead';
// let firstName;
//
// const getFirstName = (fullName) => {
//     firstName = fullName.split(' ')[0];
//     return firstName;
// }


//arrow function using shorthand syntax

// const getFirstName = (fullName) => fullName.split(' ')[0];
//
// console.log(getFirstName(fullName));


//teacher example

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }
//
// console.log(getFirstName('Mike Mead'));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Michael Mead'));
