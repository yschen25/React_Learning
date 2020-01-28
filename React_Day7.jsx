import React from 'react';
import ReactDOM from 'react-dom';

class InputGender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gender: 'Man'};
        this.selectGender = this.selectGender.bind(this);
    }

    selectGender(e) {
        this.setState({gender: e.target.value});
    }

    componentDidUpdate() {
        console.log(`Gender : ${this.state.gender}`);
    }

    render() {
        // let title;
        // if (this.state.gender === 'Man') {
        //     title = <HelloTitle title="Mr."/>
        // } else {
        //     title = <HelloTitle title="Miss"/>
        // }

        return (
            <div>
                {/*{title}*/}
                {/* 用花括號包住 JavaScript 語法，以下判斷如果選擇男生就 HelloTitle，沒有 else，所以選擇女則不進行動作 */}
                {/* {(this.state.gender === 'Man') && (<HelloTitle title="Man" />)} */}
                {/* 用花括號包住 JavaScript 語法，以下用一行式的 if 來處理 */}
                {(this.state.gender === 'Man') ? <HelloTitle title='Man'/> : <HelloTitle title='Woman'/>}
                <select onChange={this.selectGender.bind(this)}>
                    <option value="Man">Man</option>
                    <option value="Woman">Woman</option>
                </select>
            </div>
        )
    }
}

class HelloTitle extends React.Component {

    componentDidUpdate() {
        console.log(`This time is : ${this.props.title}`);
    }

    render() {
        if (this.props.title === 'Man') {
            return <h1>Hello, {this.props.title}</h1>
        } else {
            return null;
        }
    }
    // render() {
    //     return <h1>Hello, {this.props.title}</h1>
    // }
}

ReactDOM.render(<InputGender/>, document.getElementById('app'));