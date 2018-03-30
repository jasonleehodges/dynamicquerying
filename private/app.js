// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';

class ParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            title: "Randomizer App",
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleAddOptions(text){
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([text])
            }
        })
    }
    render (){
        return (
            <div>
                <Header title={this.state.title}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOptions={this.handleAddOptions}/>
            </div>
        );
    }
}

const element = document.getElementById("main");

ReactDOM.render(<ParentComp />, element)