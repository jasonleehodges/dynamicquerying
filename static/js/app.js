"use strict";

// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch

var template = React.createElement(
  "p",
  null,
  "Testing Testing 123"
);
var element = document.getElementById("main");

ReactDOM.render(template, element);
