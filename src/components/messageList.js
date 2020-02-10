import React from "react";
import {connect} from 'react-redux';

class ConnectMessageList extends React.Component {

    render() {

        let message = this.props.data.map((val) => {
            return <li key={val.id}>{val.name} : {val.text}</li>
        });

        return <ul>{message}</ul>
    }
}

// Data 會被傳入這個 function 中的 state
// 參數 state 在連接時 Redux 會將 store 傳進這個位置
const mapStateToProps = state => {
    return {data: state.message};
};

/* 建立一個變數來存放 connect 回傳的組件，
   注意這邊不是兩個參數，是兩個括號，
   第一個給入 mapStateToProps，第二個給要使用資料的組件 */
// 透過 connect 分別將 mapStateToProps 與 MessageList 送進處理，會得到一個新的 component
export const MessageList = connect(mapStateToProps)(ConnectMessageList);

