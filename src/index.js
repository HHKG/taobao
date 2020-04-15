import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './pages/HomePage';
import Login from './pages/Login/login';

ReactDOM.render(
  // StrictMode 是一个工具，用于突出应用程序中的潜在问题。与 Fragment 类似，StrictMode 不呈现任何可见 UI。它为它的后代启动额外的检查和警告。
  <React.StrictMode>
    <HomePage></HomePage>
    <Login></Login>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
