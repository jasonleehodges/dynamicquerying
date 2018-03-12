"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
var ParentComp = function (_React$Component) {
    _inherits(ParentComp, _React$Component);

    function ParentComp(props) {
        _classCallCheck(this, ParentComp);

        var _this = _possibleConstructorReturn(this, (ParentComp.__proto__ || Object.getPrototypeOf(ParentComp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.state = {
            title: "Randomizer App",
            options: []
        };
        return _this;
    }

    _createClass(ParentComp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handleAddOptions",
        value: function handleAddOptions(text) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([text])
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { handleAddOptions: this.handleAddOptions })
            );
        }
    }]);

    return ParentComp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                this.props.title
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            console.log("hello");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        className: "btn btn-danger",
                        onClick: this.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    "Decide for Me!"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Options Component Here"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { text: option, key: option });
                    })
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: this.props.handleDeleteOptions },
                    "Remove All"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.optionSubmit = _this5.optionSubmit.bind(_this5);
        return _this5;
    }

    _createClass(AddOption, [{
        key: "optionSubmit",
        value: function optionSubmit() {
            var text = document.getElementById('optionInput').value.trim();
            if (text) {
                this.props.handleAddOptions(text);
            }
            document.getElementById('optionInput').value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("input", { className: "form-control", id: "optionInput", type: "text", placeholder: "Add Option" }),
                React.createElement(
                    "button",
                    { className: "btn btn-primary", onClick: this.optionSubmit },
                    "Submit"
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.text
            );
        }
    }]);

    return Option;
}(React.Component);

var element = document.getElementById("main");

ReactDOM.render(React.createElement(ParentComp, null), element);
