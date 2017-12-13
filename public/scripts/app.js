'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//goal: create classes to reuse code - then make instances
//classes/components upper case first letter

var Person =
//define class via constructor function
function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';

    _classCallCheck(this, Person);

    // this.name = name || 'no name';
    this.name = name;
};

var me = new Person('Lois');
console.log(me);

var other = new Person();
console.log(other);
