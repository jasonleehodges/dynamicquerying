import React from 'react';

export default class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}