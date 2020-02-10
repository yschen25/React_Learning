import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link} from "react-router-dom";

class Main extends React.Component {
    render() {
        return (

            <HashRouter>
                <div>
                    <CusLink to='/hello/Ka' name="Using component to render"/>
                    <br/>
                    <CusLink to='/hey/Ka' name="Using render to render"/>
                    <hr/>
                    <Route path='/hello/:userName' component={Hello}/>
                    <Route path='/hey/:userName' render={props => <h1>Hey! {props.match.params.userName}</h1>}/>
                </div>
            </HashRouter>
        )
    }
}

class CusLink extends React.Component {
    render() {
        return (
            <Route path={this.props.to}
                   children={props => {
                       return (
                           <li>
                               {props.match ? ">" : ''}
                               <Link to={this.props.to}>{this.props.name}</Link>
                           </li>
                       )
                   }}
            />
        )
    }
}

class Hello extends React.Component {
    render() {
        return (
            <h1>Hello! {this.props.match.params.userName}</h1>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));