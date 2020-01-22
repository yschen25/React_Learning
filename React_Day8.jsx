import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {

    // render() {
    //     let list = [<li>Have dinner</li>, <li>Play games</li>, <li>Go to sleep</li>];
    //     return <ul>{list}</ul>
    // }

    // Method1
    // render() {
    //
    //     let arr = ['Beer', 'Cake', 'Tea', 'Chocolate', "Latte"];
    //     let list = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         list.push(<li>{arr[i]}</li>)
    //     }
    //
    //     return <ul>{list}</ul>
    // }

    // Method2
    // render(){
    //     let arr = ['Beer', 'Cake', 'Tea', 'Chocolate', "Latte"];
    //     let list = arr.map(function(num){ return <li>{num}</li>});
    //
    //     return <ul>{list}</ul>
    // }

    // Method3
    // render(){
    //     let arr = ['Beer', 'Cake', 'Tea', 'Chocolate', "Latte"];
    //     let list = arr.map((num)=> <li>{num}</li>);
    //
    //     return <ul>{list}</ul>
    // }

    render(){

        let list = this.props.list;
        let arr = list.map((val)=> <li key={val.id} id={val.id}>{val.item}</li>);

        return <ul>{arr}</ul>
    }
}

let list = [{id: 'a', item : 'Read'}, {id : 'b', item:'Listen'}, {id: 'c', item : 'Watch'}];

ReactDOM.render(<ToDoList list={list}/>, document.getElementById('app'));