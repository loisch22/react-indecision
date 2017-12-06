'use strict';

console.log("App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your lives in the hands of a computer',
    options: ['One', 'Two']
};

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

//js does not have data binding
//count is being increased but DOM is not being updated
//regenerate template and re-render it to screen to change count
var count = 0;
var addOne = function addOne() {
    count++;
    //call the renderCounterApp() to re-render the view
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log('reset', count);
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

//initialize our app
renderCounterApp();
