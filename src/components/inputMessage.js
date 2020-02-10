import React from "react";
import {connect} from 'react-redux';
import {addMessage} from "../actions/addMessage";

class ConnectInputMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', text: ''};
        this.changeState = this.changeState.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
    }

    changeState(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    clearMessage() {
        this.setState({name: '', text: ''});
    }

    submitMessage() {
        let msgData = {
            key: '',
            name: this.state.name,
            text: this.state.text
        };

        console.log(msgData);
        this.props.addMessage(msgData);
        this.clearMessage();
    }

    render() {
        return (
            <div>
                <label>NickName : </label>
                <input name="name" value={this.state.name} onChange={this.changeState}/>
                <br/><br/>
                <label>Message : </label>
                <textarea name="text" value={this.state.text} onChange={this.changeState}></textarea>
                <br/>
                <br/>
                <input type="button" value="Submit" onClick={this.submitMessage}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
    }
};

export const InputMessage = connect(null,mapDispatchToProps)(ConnectInputMessage);

