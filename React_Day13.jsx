import {createStore} from 'redux';

// let data = {num: 1};
//
// /* 將一開始拿到的資料指定給第一個參數 state，
//    第二個參數 action 會在執行動作時傳入當初設定的指令物件，例如執行 addNum 時會將整個物件丟給 action
//    reducer 規格：(state, action) => newState */
// const rootReducer = (state = data, action) => {
//     switch (action.type) {
//         case 'add':
//             return {num : state.num + action.payload};
//         default:
//             return state;
//     }
// };
//
// let addFunction = num => ({type: 'add', payload: num});
//
// // 創建 Redux store 去存放 App 的所有 state
// let store = createStore(rootReducer);
//
// // 使用 subscribe() 來訂閱 state 是否更新
// store.subscribe(()=>
//     console.log(store.getState())
// );
//
// store.dispatch(addFunction(2));
//
// // data 是用來確認原本的資料是不會變的
// window.data = data;
// window.store = store;

let state = 50;

// Action creators
function addFunction(payload) {
    return {
        type: 'add',
        payload: payload
    }
}

function minusFunction(payload) {
    return {
        type: 'minus',
        payload: payload
    }
}

const rootReducer = (data = state, action) => {
    switch (action.type) {
        case 'add':
            return data + action.payload;
        case 'minus':
            return data - action.payload;
        default:
            return data;
    }
};

let store = createStore(rootReducer);

store.subscribe(() =>
    console.log(store.getState())
);

// Action
// store.dispatch(({type : '', payload : 1}));
// store.dispatch(({type : 'add', payload : 1}));
// store.dispatch(({type : 'minus', payload : 1}));

store.dispatch(addFunction(20));
store.dispatch(minusFunction(20));