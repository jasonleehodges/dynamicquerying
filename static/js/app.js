'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
var ParentComp = function (_React$Component) {
    _inherits(ParentComp, _React$Component);

    function ParentComp() {
        _classCallCheck(this, ParentComp);

        return _possibleConstructorReturn(this, (ParentComp.__proto__ || Object.getPrototypeOf(ParentComp)).apply(this, arguments));
    }

    _createClass(ParentComp, [{
        key: 'render',
        value: function render() {
            var title = "Randomizer App";
            var options = ['Thing One', 'Thing Two', 'Thing Four'];

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
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
        key: 'handlePick',
        value: function handlePick() {
            console.log("hello");
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { className: 'btn btn-danger', onClick: this.handlePick },
                    'Decide for Me!'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.removeAll = _this4.removeAll.bind(_this4);
        _this4.state = {
            options: _this4.props.options
        };
        return _this4;
    }

    _createClass(Options, [{
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function (prevState) {
                return prevState.options = [];
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Options Component Here'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.state.options.map(function (option) {
                        return React.createElement(Option, { text: option, key: option });
                    })
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-danger', onClick: this.removeAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'optionSubmit',
        value: function optionSubmit() {
            if (document.getElementById('optionInput').value.trim()) {
                console.log("option added " + document.getElementById('optionInput').value.trim());
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('input', { className: 'form-control', id: 'optionInput', type: 'text', placeholder: 'Add Option' }),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: this.optionSubmit },
                    'Submit'
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.text
            );
        }
    }]);

    return Option;
}(React.Component);

var element = document.getElementById("main");

ReactDOM.render(React.createElement(ParentComp, null), element);
