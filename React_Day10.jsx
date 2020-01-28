import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {

    cal() {
        let degree = this.props.degree;
        return degree > 100 ? 'Reach boiling point' : 'Not reach boiling point';
    }

    render() {
        return (
            <div>
                <h1>{this.cal()}</h1>
            </div>
        )
    }
}

// class Temperature extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {degree: 0};
//         this.changeState = this.changeState.bind(this);
//     }
//
//     changeState(e) {
//         let degree = e.target.value;
//         this.setState({degree:degree});
//     }
//
//     render() {
//         return (
//             <div>
//                 <Title degree={this.state.degree}/>
//                 <p>Now is {this.state.degree} degree Celsius</p>
//                 <input onChange={this.changeState}/>
//             </div>
//         )
//     }
// }

class TemperatureInput extends React.Component {

    render() {
        return (
            <div>
                <p>Now is {this.props.degree} degree {this.props.type}</p>
                <input value={this.props.degree} onChange={this.props.changeState}/>
            </div>
        )
    }
}

class TemperatureForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {degree: 0, type: ''};
        this.changeState = this.changeState.bind(this);
    }

    changeState(type) {
        let degree = window.event.target.value;
        this.setState({degree: degree, type: type});
    }

    convert(degree, type) {
        if (type === 'C') {
            return (degree - 32) * 5 / 9
        } else {
            return (degree * 9 / 5) + 32;
        }
    }

    render() {
        /* 在 render 的時候，先去取 state 判斷目前儲存的溫度是攝氏還華氏
          華氏的話 temperature_F 就不用轉，攝氏的話換 temperature_C 不轉
          但是如果有不同就得傳進 convert 中做單位的轉換 */
        let degree = this.state.degree;
        let temperature_C = this.state.type === 'F' ? this.convert(degree, 'C') : degree;
        let temperature_F = this.state.type === 'C' ? this.convert(degree, 'F') : degree;

        return (
            <div>
                <Title degree={temperature_C}/>
                <TemperatureInput degree={temperature_C} type='C'
                                  changeState={this.changeState.bind(this, 'C')}/>
                <TemperatureInput degree={temperature_F} type='F'
                                  changeState={this.changeState.bind(this, 'F')}/>
            </div>
        )
    }
}

ReactDOM.render(<TemperatureForm/>, document.getElementById('app'));