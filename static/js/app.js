"use strict";

// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
console.log("react is running...");
var template = React.createElement(
  "p",
  null,
  "Testing Testing 123"
);
var element = document.getElementById("testing");

ReactDOM.render(template, element);
