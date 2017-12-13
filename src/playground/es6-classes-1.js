//goal: create classes to reuse code - then make instances
//classes/components upper case first letter

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi I am ' + this.name + '!';

        //template string better to inject data
        return `Hi. I am ${this.name}`;
    }
    getDescription() {
        return `Hi ${this.name}! You are ${this.age} years old.`
    }
}

const me = new Person('Lois', 27);
// console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
// console.log(other.getGreeting());
console.log(other.getDescription());