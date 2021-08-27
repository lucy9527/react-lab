import "./App.css";
// import Home from './pages/home'
// import Record from './pages/record'
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { BindRefFoot, Record, TestOne } from "./pages/index";
import { Row } from "antd";


const App = (props) => {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  useEffect(()=>{
    
  })
  const handleCount = () => setCount(count + 1);
  const handleTotal = () => setTotal(total + 1);

  const [num, setNum] = useState(0);
  const addNum = () => {
    setNum(num + 1);
  };
  console.log("渲染");
  return (
    <div className="App">
      <div>
        <div>Count is {count}</div>
        <div>Total is {total}</div>
        <br/>
        <div>
          <button onClick={handleCount}>Increment Count</button>
          <button onClick={handleTotal}>Increment Total</button>
        </div>
      </div>
      <Row>
        <TestOne></TestOne>
      </Row>

      <Record></Record>
      <div onClick={addNum}>
        数据展示：<span>{num}</span>
      </div>
    </div>
  );
};

// connect 将state、dispatch合并到 组件上，返回一个新的组件对象
// http://cn.redux.js.org/docs/react-redux/api.html
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect((state) => ({
  num: state.home.num, // 使用 combineReducers之后，树的结构会变
}))(App);
