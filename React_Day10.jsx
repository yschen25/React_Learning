import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {

    cal() {
        let degree = this.props.title;
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


class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {degree: 0};
        this.changeState = this.changeState.bind(this);
    }

    changeState() {

    }

    render() {
        return (
            <div>
                <Title title={this.state.degree}/>
                <p>Now is {this.state.degree} degree Celsius</p>
                <input onChange={this.changeState}/>
            </div>
        )
    }

}

ReactDOM.render(<Temperature/>, document.getElementById('app'));