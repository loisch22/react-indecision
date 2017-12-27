//var can have variable named the same; redefines variable
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//let cannot duplicate variables; error is thrown; can reassign
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//const cannot duplicate variable; can't reassign
const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName() {
    //var, let, const only available within scope NOT global
    const petName = 'Tobi';
    return petName;
}

//assign const to function that returns pet name
const petName = getPetName();
console.log(petName);

// block scoping -
// const, let bound to functions/code blocks (for loops/if statements)
// var can have access to variables within block outside of block

const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

