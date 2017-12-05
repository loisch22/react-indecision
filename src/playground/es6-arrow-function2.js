// arguments object - no longer bound with arrow functions

//es5 function - if need access to arguments use this j\

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// console.log(add(55, 1001));


//es6 arrow function - no longer access to arguments

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}


// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Seattle', 'Houston', 'Federal Way'],
    //es6 method on objects function syntax
    printPlacesLived() {
        //es6 arrow function lets you use `this` within function
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

//don't use arrow function for methods
    //gets values from parent/globally
    //so does not have access to user object


