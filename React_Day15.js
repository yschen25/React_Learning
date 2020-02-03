import {createStore} from 'redux';

let data = {
    message: [{id: '1', name: 'Ka Ka', text: 'Hello, how are you ?'},
        {id: '2', name: 'Erika', text: 'Good, and you ?'},
        {id: '3', name: 'Ka Ka', text: 'Also Good, do you want to have dinner with me tonight ?'},
        {id: '4', name: 'Erika', text: 'Sure, my pleasure.'},
        {id: '5', name: 'Ka Ka', text: 'We will see in front the 50 lan store at 18:00'},
        {id: '6', name: 'Erika', text: 'Great! See you on time.'}]
};

// let addMessage = data => ({type: 'addMessage', payload: data});

function addMessage(payload) {
    return {
        type: 'addMessage',
        payload: payload
    }
}

const rootProducer = (state = data, action) => {
    switch (action.type) {
        case 'addMessage':
            action.payload.key = String(state.message.length + 1);
            // 這裡把接收到的資料 payload 增加到 message 的陣列中，並回傳整個 state 的內容
            return {...state, message: [...state.message, action.payload]};
            break;
        default:
            return state;
    }
};

let store = createStore(rootProducer);

store.subscribe(() => {
    console.log(store.getState())
});

// store.dispatch(addMessage(data));

export {store, addMessage};