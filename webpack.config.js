//引用path模組
const path = require('path');
module.exports = {
     // 如果有一個以上的檔案需要打包，可以傳陣列給entry
    entry: {
        index: ['./React_Day5.jsx']
    },
    output: {
        // 這裡是打包後的檔案名稱
        filename: 'bundle5.js',
        // 打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./'),
    },
     // 將loader的設定寫在module的rules屬性中
    module: {
        // rules的值是一個陣列可以存放多個loader物件
        rules: [
            // 編譯 js
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            // 編譯 jsx
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react','@babel/preset-env'] } } }
        ]
    }
};