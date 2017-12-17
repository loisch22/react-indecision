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


class Student extends Person {
    constructor(name, age, major) {
        //super function refers to parent class
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        //logical not operator
        //!!doesContainString = true
        return !!this.major;
    }
}

const me = new Student('Lois', 27, 'Computer Science');
// console.log(me.getGreeting());
console.log(me.hasMajor());

const other = new Student();
// console.log(other.getGreeting());
console.log(other.hasMajor());