import React from 'react';
import ReactDOM from 'react-dom';

class SearchInput extends React.Component {

    render() {
        return <div>
            <label>Search : </label>
            <input onChange={this.props.changeState}/>
        </div>
    }
}

class Message extends React.Component {

    render() {
        return <div key={this.props.id}>
            <label>{this.props.name} : </label>
            <p>{this.props.text}</p>
        </div>
    }
}

class MessageBlock extends React.Component {

    render() {
        let data = this.props.message;
        let message = data.map((val) => {
                if (val.name.indexOf(this.props.searchName) !== -1) {
                    return <Message key={val.id} name={val.name} text={val.text}/>
                }
            }
        );

        return <div>{message}</div>
    }
}

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = {searchName: ''};
    }

    changeState(e) {
        this.setState({searchName: e.target.value});
    }

    render() {

        return (
            <div>
                <SearchInput changeState={this.changeState}/>
                <hr/>
                <MessageBlock message={this.props.message} searchName={this.state.searchName}/>
            </div>
        )
    }
}

let data = [
    {id: '1', name: 'Ka Ka', text: 'Hello, how are you ?'},
    {id: '2', name: 'Erika', text: 'Good, and you ?'},
    {id: '3', name: 'Ka Ka', text: 'Also Good, do you want to have dinner with me tonight ?'},
    {id: '4', name: 'Erika', text: 'Sure, my pleasure.'},
    {id: '5', name: 'Ka Ka', text: 'We will see in front the 50 lan store at 18:00'},
    {id: '6', name: 'Erika', text: 'Great! See you on time.'}
];

ReactDOM.render(<MessageForm message={data}/>, document.getElementById('app'));