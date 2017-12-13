//goal: create classes to reuse code - then make instances
//classes/components upper case first letter

class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }

    getGreeting() {
        //return 'Hi I am ' + this.name + '!';

        //template string better to inject data
        return `Hi. I am ${this.name}`;
    }
}

const me = new Person('Lois');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());