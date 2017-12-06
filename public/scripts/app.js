'use strict';

var app = {
    title: 'Visibility Toggle',
    text: 'Hey this works!'
};

var visibility = false;

var onShowDetails = function onShowDetails() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && true && React.createElement(
            'p',
            null,
            app.text
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
