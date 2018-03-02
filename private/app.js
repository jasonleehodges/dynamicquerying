// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch

const template = <p>Testing Testing 123</p>;
const element = document.getElementById("main");

ReactDOM.render(template, element);