//goal: create classes to reuse code - then make instances
//classes/components upper case first letter

class Person {
    //define class via constructor function
    constructor(name = 'Anonymous') {
        // this.name = name || 'no name';
        this.name = name;
    }

}

const me = new Person('Lois');
console.log(me);

const other = new Person();
console.log(other);