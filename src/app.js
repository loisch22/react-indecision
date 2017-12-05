console.log("App.js is running!");

// JSX - JavaScript XML
// if statements
// ternary operators
// logical and operator

var app = {
    title: 'Indecision App',
    subtitle: 'Put your lives in the hands of a computer',
    options: ['One', 'Two']
};

function getOptions(options) {
    if(options.length > 0) {
        return <p>Here are your options</p>
    } else {
        return <p>No options</p>
    }
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {getOptions(app.options)}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Seattle'
};
// if statement
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
};
// ternary operation ? :
//logical and&& operator
    // true && 'Some age' --> if its 'true' then string show
    // if false && 'Some age' --> false value is returned

var templateTwo = (
  <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('appTwo');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);