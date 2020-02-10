import React from 'react';
import {Switch, Route, Redirect, Link} from "react-router-dom"

class About extends React.Component {
    render() {

        console.log(this.props.match);

        return (
            <div>
                <h1>About</h1>
                <div><Link to={`${this.props.match.url}/intro`}>Introduction</Link></div>
                <div><Link to={`${this.props.match.url}/his`}>History</Link></div>
                <div><Link to={`${this.props.match.url}/story`}>Story</Link></div>
                <hr/>
                {/*<Route exact path={`${this.props.match.path}/:type`} component={AboutContent}/>*/}

                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={Introduction} />
                    <Route path={`${this.props.match.path}/his`} component={History} />
                    {/*<Route component={NoPage} />*/}

                    {/*<Redirect from={`${this.props.match.path}/story`} to={`${this.props.match.path}/his`} />*/}

                    <Redirect from={`${this.props.match.path}/story`} to={{pathname:`${this.props.match.url}/his`
                        ,search: "?hey=UCCU"
                        ,state:{name:'Referrer'}}} />
                </Switch>

                <Route />
            </div>

        )
    }
}

class Introduction extends React.Component {
    render() {
        return (
            <div>Introduction</div>
        )
    }
}

class History extends React.Component {
    render() {
        console.log(this.props.location.state);

        return (
            <div>History</div>
        )
    }
}

class NoPage extends React.Component {
    render() {
        return (
            <div>Waiting...</div>
        )
    }
}

// class AboutContent extends React.Component {
//
//
//     changeContent() {
//         let content = '';
//         let type = this.props.match.params.type;
//         if (type === 'intro') {
//             content = 'Introduction Contents'
//         } else {
//             content = 'History Contents'
//         }
//
//         return content;
//     }
//
//
//     render() {
//
//         console.log(this.props.match);
//
//         return (
//             <div>{this.changeContent()}</div>
//         )
//     }
// }

export {About};
