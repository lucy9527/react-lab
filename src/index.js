import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import {Provider} from 'react-redux' // App及其子孙需要结合connection使用

// Provider是作为整个App的容器，在你原有的App Container的基础上再包上一层
// 接受Redux的store作为props，并将其声明为context的属性之一
// 子组件可以在声明了contextTypes之后可以方便的通过this.context.store访问到store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
