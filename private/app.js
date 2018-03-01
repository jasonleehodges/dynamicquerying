// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
console.log("react is running...")
const template = <p>Testing Testing 123</p>;
const element = document.getElementById("testing");

ReactDOM.render(template,element);
