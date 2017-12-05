//es5 function
const square = function (x) {
    return x * x;
};
//es5 can name function
function square(x) {
    return x * x;
}


//es6 arrow function (can put functions, can put whatever inside)
//can't name function aka anonymous function
//have to assign to variable like const/let

// const squareArrow = (x) => {
//     return x * x;
// };


//arrow function expression syntax
    //arrow function that only returns can use:

const squareArrow = (x) => x * x;


console.log(squareArrow(9));

