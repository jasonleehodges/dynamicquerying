// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
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


class Header extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

class Action extends React.Component {
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

class Options extends React.Component {
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

class AddOption extends React.Component {
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

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}

const element = document.getElementById("main");

ReactDOM.render(<ParentComp />, element)