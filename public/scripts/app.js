"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML (JS syntax extension - syntax provided by React
// - like SCSS or LESS extension for CSS)
// Need to compile to regular JS to display on browser - Babeljs.io

// JSX expression below
var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);

//created ID in DOM to place template
var appRoot = document.getElementById('app');

//takes 2 arguments, what to render and where
ReactDOM.render(template, appRoot);
