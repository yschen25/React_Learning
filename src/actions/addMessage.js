import {ADD} from "../constants/action_type";

// let addMessage = data => ({type: 'addMessage', payload: data});

function addMessage(payload) {
    return {
        type: ADD,
        payload: payload
    }
}

export {addMessage};