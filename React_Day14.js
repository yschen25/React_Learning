import {createStore} from 'redux';

let data = {
    message: [{id: '1', name: 'Ka Ka', text: 'Hello, how are you ?'},
        {id: '2', name: 'Erika', text: 'Good, and you ?'},
        {id: '3', name: 'Ka Ka', text: 'Also Good, do you want to have dinner with me tonight ?'},
        {id: '4', name: 'Erika', text: 'Sure, my pleasure.'},
        {id: '5', name: 'Ka Ka', text: 'We will see in front the 50 lan store at 18:00'},
        {id: '6', name: 'Erika', text: 'Great! See you on time.'}]
};

// let addFunction = payload => ({type : 'addMessage', payload : data});

function addFunction(payload) {
    return {
        type: 'addMessage',
        payload: payload
    }
}

const rootProducer = (state = data, action) => {
    switch (action.type) {
        case 'addMessage':
            break;
        default:
            return state;
    }
};

let store = createStore(rootProducer);

store.subscribe(() => {
    console.log(store.getState())
});

// store.dispatch(addFunction(data));

export default store;