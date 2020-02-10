import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {style: {backgroundColor: '#fff', height: '100px', width: '400px'}}
    }

    render() {
        return (
            <div style={this.state.style}>
                {this.props.children}
            </div>
        )
    }
}

class MessageContent extends React.Component {
    render() {
        return (
            <p>The text here will pass to Message's props children</p>
        )
    }
}

class MessageBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {style: {backgroundColor: '#DDD', height: '150px', width: '800px'}};
        this.writeConsole = this.writeConsole.bind(this);
    }

    writeConsole(e) {
        console.log(e.target.innerHTML)
    }

    render() {
        return <div style={this.state.style}>
            {/* props.children 的值會預設傳入被該組件包夾的內容也就是 JSX */}
            <Message>
                {/* 不需要使用 props 去傳 function，可直接使用 this.writeMessageConsole */}
                {/* <p onClick={this.writeConsole} >The text here will pass to Message's props children</p> */}
                <MessageContent/>
            </Message>
        </div>
    }
}

ReactDOM.render(<MessageBlock/>, document.getElementById('app'));