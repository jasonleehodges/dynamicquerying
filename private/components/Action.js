import React from 'react';

export default class Action extends React.Component {
    handlePick(){
        console.log("hello");
    }
    render() {
        return (
            <div>
                <button 
                    className="btn btn-danger" 
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >Decide for Me!</button>
            </div>
        );
    }
}