import React from 'react';
import ReactDOM from 'react-dom';

// // 建立一個 NowTime 組件類別顯示目前時間
// class NowTime extends React.Component {
//     render() {
//         // 讀取 props 中取出 time 的值
//         return <p style={this.props.style}>{this.props.time}</p>
//     }
// }
//
// // 使用該類別做出一個實體，並將目前的時間傳入 time 中
// ReactDOM.render(<NowTime style={{color: '#f00'}}
//                          time={new Date().toLocaleTimeString()}/>, document.getElementById('app'));


class NowTime extends React.Component {
    // 使用類別中的 constructor 建構子，參數中傳入 props 是必要的
    constructor(props) {
        // super 呼叫上一層類別也就是 React.Component 內的 props 屬性
        super(props);
        /* 設定該類別的屬性，this 就是指定到使用 NowTime 建構出來的物件
          這裡針對那個物件建立一個 state 的物件屬性，並在裡面設定該類別的值 */
        this.state = {time: new Date().toLocaleTimeString()};
    }

    // 加入組件建構完成後執行的事件
    // 只要是想在組件產生後先執行的動作，通通都可以寫在componentDidMount()裡面
    componentDidMount() {

        /* 在建構完成後，每秒都去刷新 this.state.time 的值
          (1)先宣告一個更新 state 內容的 function
          (2)每秒去執行一次該 function*/
        const uploadTime = () => {
            // 這裡面的 setState() 能夠重新設定 state 的值
            // 並不是用覆蓋的方式，而是更新
            this.setState({time: new Date().toLocaleTimeString()});
        };

        setInterval(uploadTime, 1000);
    }

    // 在 state 被修改時會執行
    componentDidUpdate() {
        console.log("Time is running out");
    }

    // 當組件被移除時執行
    componentWillUnmount() {
        console.log(`Component destroyed time : ${this.state.time}`);
    }

    render() {
        return <p>{this.state.time}</p>
    }
}

ReactDOM.render(<NowTime/>, document.getElementById('app'));

// 宣告一個 function 來移除 document.getElementById('app') 中的組件
const destroyComponent = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
};

setInterval(destroyComponent, 5000);