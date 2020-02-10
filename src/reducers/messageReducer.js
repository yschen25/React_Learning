import {data} from '../constants/model.js';
import {ADD} from "../constants/action_type";

const rootProducer = (state = data, action) => {
    switch (action.type) {
        case ADD:
            action.payload.key = String(state.message.length + 1);
            // 這裡把接收到的資料 payload 增加到 message 的陣列中，並回傳整個 state 的內容
            return {...state, message: [...state.message, action.payload]};
        default:
            return state;
    }
};

export {rootProducer};