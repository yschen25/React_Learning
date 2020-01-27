import React from 'react';
import ReactDOM from 'react-dom';

// 受控組件 (Controlled Component)
// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name : 'Default Name',
//             gender : 'M',
//             intro : 'wooooooo'
//         };
//         this.changeState = this.changeState.bind(this);
//         this.submit = this.submit.bind(this);
//     }
//
//     // 我們綁定的 state 值剛好對應到每個組件的 name 屬性，所以才可以直接抓組 件name 的屬性來更改 state 中的資料
//     // 加上中括號是為了讓 JavaScript 知道那是變數
//     changeState(e){
//         let eventName = e.target.name;
//         this.setState({[eventName] : e.target.value});
//     }
//
//     submit(e){
//         e.preventDefault();
//         console.log(`Name : ${this.state.name}`);
//         console.log(`Gender : ${this.state.gender}`);
//         console.log(`Introduction : ${ this.state.intro}`);
//     }
//
//     render(){
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Name:</label>
//                 <input name="name" value={this.state.name} onChange={this.changeState}/>
//                 <input type="submit" />
//                 <br/>
//                 <br/>
//                 <label>Gender:</label>
//                 <select name="gender" value={this.state.gender} onChange={this.changeState}>
//                     <option value="M">Man</option>
//                     <option value="W">Woman</option>
//                 </select>
//                 <br/>
//                 <br/>
//                 <textarea name="intro" value={this.state.intro} onChange={this.changeState}>
//                 </textarea>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<Form />, document.getElementById('app'));


// class CheckForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.submitForm = this.submitForm.bind(this);
//         this.changeState = this.changeState.bind(this);
//         this.state = {
//             list: [{id: 'a', list: 'Eating', checked: true},
//                    {id: 'b', list: 'Reading', checked: true},
//                    {id: 'c', list: 'Sleeping', checked: false}]
//         };
//     }
//
//     // 想像如果 index 是 0，表示說第 0 個有變動
//     // 此時 arr[0]['checked'] 本來是於 true，變動過後就要變成 false 了
//     changeState(index) {
//         let arr = this.state.list;
//
//         if (arr[index]['checked']) {
//             arr[index]['checked'] = false;
//         } else {
//             arr[index]['checked'] = true;
//         }
//
//         this.setState({list: arr});
//     }
//
//     submitForm(e) {
//         e.preventDefault();
//         let str = '';
//         this.state.list.map((list) => {
//             if (list.checked) {
//                 str += `${list.list} `;
//             }
//             return str;
//         });
//
//         console.log(`Done : ${str}`);
//     }
//
//     render() {
//
//         let list = this.state.list.map((list, index) => {
//             return <div key={list.id}>
//                 <input type="checkbox" id={list.list} key={list.id} checked={list.checked}
//                        onChange={this.changeState.bind(this, index)}/>
//                 <label htmlFor={list.list}>{list.list}</label>
//             </div>
//         });
//
//         return (
//             <form onSubmit={this.submitForm}>
//                 {list}
//                 <br/>
//                 <input type="submit"/>
//             </form>
//         )
//     }
// }
//
// ReactDOM.render(<CheckForm/>, document.getElementById('app'));


// 不受控組件 (Uncontrolled Component)
// File 因為必須由使用者選擇檔案，再去取值上傳，這種情況下我們沒辦法去設定他的值是什麼，所以被稱為不受控組件
class FileForm extends React.Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        console.log(this.ref.current.files[0].name);
    }

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="file">Upload File</label>
                <br/>
                <br/>
                <input id="file" type="file" ref={this.ref}/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}

ReactDOM.render(<FileForm/>, document.getElementById('app'));
