import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {

    render() {
        let list = [<li>Have dinner</li>, <li>Play games</li>, <li>Go to sleep</li>];
        return <ul>{list}</ul>
    }
}

ReactDOM.render(<ToDoList/>, document.getElementById('app'));