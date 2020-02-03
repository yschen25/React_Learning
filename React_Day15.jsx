import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {store, addMessage} from "./React_Day15.js";

class InputMessage extends React.Component {
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


class MessageList extends React.Component {

    render() {

        let message = this.props.data.map((val) => {
            return <li key={val.id}>{val.name} : {val.text}</li>
        });

        return <ul>{message}</ul>
    }
}

// Data 會被傳入這個 function 中的 state
// 參數 state 在連接時 Redux 會將 store 傳進這個位置
const mapStateToProps = state => {
    return {data: state.message};
};

const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
    }
};

/* 建立一個變數來存放 connect 回傳的組件，
   注意這邊不是兩個參數，是兩個括號，
   第一個給入 mapStateToProps，第二個給要使用資料的組件 */
// 透過 connect 分別將 mapStateToProps 與 MessageList 送進處理，會得到一個新的 component
// const List = connect(mapStateToProps)(MessageList);

class ConnectMessageForm extends React.Component {
    render() {
        /* Provider 是 react-redux 中的組件，它會接收在 Redux 中創建的 store，
           並根據和 component 綁在一起的需求單 mapStateToProps 上要求的資料從 store 中取出，
           再透過 props 流向 component */
        /* Provider 永遠都在最外層，也永遠都只有一個，
           為了保持資料來源都是從 Provider 流進內部的 component，
           這也是為什麼每個專案中 store 應該都只能有一個 */
        return <div>
            <InputMessage addMessage={this.props.addMessage}/>
            <MessageList data={this.props.data}/>
        </div>
    }
}

const MessageForm = connect(mapStateToProps, mapDispatchToProps)(ConnectMessageForm);

ReactDOM.render(<Provider store={store}><MessageForm/></Provider>, document.getElementById('app'));
