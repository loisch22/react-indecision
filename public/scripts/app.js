'use strict';

var app = {
    title: 'Visibility Toggle',
    text: 'Hey this works!',
    show: 'Show details',
    hide: 'Hide details'
};

var visibility = false;

var onShowDetails = function onShowDetails() {
    if (visibility === false) {
        visibility = true;
    } else {
        visibility = false;
    }
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
        React.createElement(
            'p',
            null,
            visibility ? 'Hey it works!' : ''
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
