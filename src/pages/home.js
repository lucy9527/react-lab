// import react from 'react'
import { connect } from "react-redux";
import { addNum, subNum } from "../store/home/action";
import React, { Suspense ,useRef ,useEffect , createRef} from "react";
import Aside from "../components/aside";
import Footer from "./footer"
import { Row, Col } from "antd";
export const MyContext = React.createContext("default");  //双方不在同一个目录，还需要到导出，千里迢迢、归来还得长情
const Home = (props) => {
  const add = () => {
    props.ad(10);
  };
  const sub = () => {
    props.sub(2);
  };
  const Header = React.lazy(() => import("../components/header"));
  const home = useRef(null)
  const hook = createRef(null)
  useEffect(()=>{
    console.log(hook, 'hooo');
  })
  return (
    <MyContext.Provider value="dark">
      <div>
        <Row>
          <Col>
            <Aside>侧边栏</Aside>
          </Col>
          <Col>
            home主页
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div onClick={add}>{props.children}</div>
              <div onClick={sub}>{props.left}</div>
            </div>
            <div ref={home}>useRef测试</div>
            <div>
              代码分割、lazy测试
              <Suspense fallback={<div>loading</div>}>
                <Header></Header>
              </Suspense>
            </div>
          </Col>
        </Row>
        <Footer ref={hook}></Footer>
      </div>
    </MyContext.Provider>
  );
};
export default connect(
  (state) => ({
    num: state.num,
  }),
  // 作了一层actions映射
  { ad: addNum, sub: subNum }
)(Home);
