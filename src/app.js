import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  //new instance of this class needs this.value
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi my name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// -----------

class NewSyntax {
  //key = value
  name = 'Jen';
  //always bound to class instance w/o this
  getGreeting = () => {
    return `Hi my name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
