"use strict";

// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch

var favs = 0;
var addOne = function addOne() {
    favs++;
    render();
};
var subOne = function subOne() {
    favs--;
    render();
};
var dataset_columns = ["Month", "Sales", "Reps", "RepIDs"];
var jsx_columns = dataset_columns.map(function (column) {
    return React.createElement(
        "li",
        { key: column },
        column
    );
});

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "React template!"
        ),
        React.createElement(
            "p",
            null,
            "Favorites: ",
            favs
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: subOne },
            "-1"
        ),
        React.createElement(
            "ul",
            null,
            jsx_columns
        )
    );
    var element = document.getElementById("main");

    ReactDOM.render(template, element);
};

render();
