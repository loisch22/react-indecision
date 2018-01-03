import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  //new instance of this class needs this.value
  constructor() {
    this.name = 'Mike';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// -----------

class NewSyntax {
  //key = value
  name = 'Jen';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
