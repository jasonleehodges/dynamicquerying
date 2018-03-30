
import React from 'react';

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.optionSubmit = this.optionSubmit.bind(this);
    }
    optionSubmit(){
        let text = document.getElementById('optionInput').value.trim();
        if(text){
            this.props.handleAddOptions(text);
        }
        document.getElementById('optionInput').value = "";
    }
    render () {
        return (
            <div>
                <input className="form-control" id="optionInput" type="text" placeholder="Add Option"/>
                <button className="btn btn-primary" onClick={this.optionSubmit}>Submit</button>
            </div>
        );
    }
}