'use strict';

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
    if (options.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'No options'
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    getOptions(app.options),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Seattle'
};
// if statement
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};
// ternary operation ? :
//logical and&& operator
// true && 'Some age' --> if its 'true' then string show
// if false && 'Some age' --> false value is returned

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('appTwo');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
