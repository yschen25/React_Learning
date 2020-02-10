import React from "react";
import ReactDOM from "react-dom";
import {About} from "./src/components/About/About";
import {Home} from "./src/components/Home/Home";
import {HashRouter, Route, Link} from "react-router-dom"

class Main extends React.Component {
    render() {
        return (
            // BrowserRouter 內只能有一個根 DOM
            /* 網址後方的這個#的意思是指，#後的所有字串都不會發 GET 請求到 server 端，像是上方的 http://localhost:8080/src/#/about
               就還是只會送出 http://localhost:8080/src/ 到 server 端，然後只要 server 端回傳 JavaScript 載入到客戶端，
               剩下的 /about 就由 Router 去判斷處理。*/
            <HashRouter>
                <div>
                    {/* Link 組件中的 to 會改變網址，但不會刷新頁面 */}
                    <div><Link to="/">Back to Home</Link></div>
                    <div><Link to="/about">About Us</Link></div>
                    <hr/>
                    {/* Path 會去讀網址後方的路徑，並依渲染該 Router 的 component 所指定的組件 */}
                    {/* 在 Route 內加入 exact 就會進行嚴格比對 path */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </HashRouter>
        )
    }
}

// 運行的原理就是藉由 Link 的 to 去改變網址，之後 Route 再判斷是否符合自身的 path 去他的 component
ReactDOM.render(<Main/>, document.getElementById('app'));

