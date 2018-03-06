// babel private/app.js --out-file static/js/app.js --presets=es2015,react --watch
class ParentComp extends React.Component {
    render (){
        const title = "Randomizer App"
        const options = ['Thing One','Thing Two', 'Thing Four']

        return (
            <div>
                <Header title={title}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
                <button className="btn btn-danger" onClick={this.handlePick}>Decide for Me!</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeAll= this.removeAll.bind(this);
        this.state = {
            options: this.props.options
        }
    }
    removeAll(){
        this.setState((prevState) => {
            return prevState.options = [];
        })
    }

    render () {
        return (
            <div>
                <p>Options Component Here</p>
                <ul>
                    {this.state.options.map((option) => {
                        return <Option text={option} key={option} />
                    })}
                </ul>
                <button className="btn btn-danger" onClick={this.removeAll}>Remove All</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    optionSubmit(){
        if(document.getElementById('optionInput').value.trim()){
            console.log("option added " + document.getElementById('optionInput').value.trim());
        }
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