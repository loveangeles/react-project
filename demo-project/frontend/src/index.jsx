import React from "react";
import ReactDOM from "react-dom/client";
// import Demo from "./views/Demo/Demo1";
// import Demo2 from "./views/Demo/Demo2";
import Demo3 from "./views/Demo/Demo3";
// import Vote from './views/Vote/complexVote/Vote';
// import Task from './views/Task';
/* 使用ANTD组件库 */
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    {/* <Vote title="禁止裁员！！"/> */}
    <Demo3 />
  </ConfigProvider>
);
