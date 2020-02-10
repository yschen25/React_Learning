import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {store} from "./src/store/configureStore";
import {MessageForm} from "./src/main.jsx";

ReactDOM.render(<Provider store={store}><MessageForm /></Provider>, document.getElementById('app'));
