import React from 'react';
import ReactDOM from 'react-dom';

// class CheckButton extends React.Component {
//
//     writeConsole() {
//         console.log("Click It!");
//     }
//
//     render() {
//         return <input type="button" onClick={this.writeConsole} value="Click Me!"/>
//     }
// }
//
// ReactDOM.render(<CheckButton/>, document.getElementById('app'));



// class AddButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0};
//         // 在 constructor 指定呼叫 addClick，並在呼叫時指定 this 為 class 本身
//         this.addClick = this.addClick.bind(this);
//     }
//
//     addClick(count) {
//         // this.setState({count: this.state.count + 1});
//         // Because setState is async, let the console function as the second parameter
//         this.setState({count: this.state.count + 1}, () => console.log(`Count clicks : ${this.state.count}`));
//         console.log(`Every time add ${count}`);
//     }
//
//     // componentDidUpdate() {
//     //     console.log(`Count clicks : ${this.state.count}`);
//     // }
//
//     render() {
//         // 在 onClick 中指定觸發的函式後面添加 .bind(this) 並填上傳入的第一個參數1
//         return <input type="button" onClick={this.addClick.bind(this, 1)} value="Click Me!"/>
//     }
// }
//
// ReactDOM.render(<AddButton/>, document.getElementById('app'));



class InputGender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gender: ''};
        this.selectGender = this.selectGender.bind(this);
    }

    // 宣告事件時傳入參數 event 取得觸發事件變數
    selectGender(e) {
        // 將觸發事件的 DOM 從 event 內的 target 屬性取出
        console.log(e.target);
        // 指定選擇的性別給 state.gender
        this.setState({gender: e.target.value});
    }

    componentDidUpdate() {
        console.log(`Gender : ${this.state.gender}`);
    }

    render() {
        return <select onChange={this.selectGender.bind(this)}>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
        </select>
    }
}

ReactDOM.render(<InputGender/>, document.getElementById('app'));
