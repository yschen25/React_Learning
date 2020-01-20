import React from 'react';
import ReactDOM from 'react-dom';

// 宣告一個 Component 組件
class Title extends React.Component {
    // 在花括號中使用 JavaScript 取得該組件的 props 屬性，再從中 props 中取 name 的值
    render() {
        return <h1 style={this.props.style}>Hello, {this.props.name}</h1>
    }
}

// 宣告一個根 Element，在裡面使用剛剛宣告的 Title 組件
// let titleDiv = (
// 				<div>
// 					<Title name="KAKA" />
// 					<Title name="CACA" /> 
// 				</div>
// 			)


class OuterTitle extends React.Component {
    render() {
        return (
            <div>
                <Title style={{'font-size': 20}} name={this.props.name}/>
                <Title style={{'font-size': 12}} name={this.props.name}/>
            </div>
        )
    }
}

// 將剛剛宣告的 titileDiv 放進 app 中
// ReactDOM.render(titleDiv, document.getElementById('root'));
ReactDOM.render(<OuterTitle name="KAKA"/>, document.getElementById("app"));