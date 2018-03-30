import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    render () {
        return (
            <div>
                <p>Options Component Here</p>
                <ul>
                    {this.props.options.map((option) => {
                        return <Option text={option} key={option} />
                    })}
                </ul>
                <button className="btn btn-danger" onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}