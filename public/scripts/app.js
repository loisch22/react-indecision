'use strict';

var app = {
    title: 'Visibility Toggle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
