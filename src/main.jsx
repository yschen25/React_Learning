import React from 'react';
import {MessageList} from "./components/messageList";
import {InputMessage} from "./components/inputMessage";

class MessageForm extends React.Component {
    render() {
        /* Provider 是 react-redux 中的組件，它會接收在 Redux 中創建的 store，
           並根據和 component 綁在一起的需求單 mapStateToProps 上要求的資料從 store 中取出，
           再透過 props 流向 component */
        /* Provider 永遠都在最外層，也永遠都只有一個，
           為了保持資料來源都是從 Provider 流進內部的 component，
           這也是為什麼每個專案中 store 應該都只能有一個 */
        return <div>
            <InputMessage />
            <MessageList />
        </div>
    }
}

export {MessageForm};