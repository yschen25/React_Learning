import {createStore} from 'redux';
import {rootProducer} from "../reducers/messageReducer";

let store = createStore(rootProducer);

store.subscribe(() => {
    console.log(store.getState())
});

// store.dispatch(addMessage(data));

export {store};