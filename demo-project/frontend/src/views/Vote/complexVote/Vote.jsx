import React, { useState, useCallback } from "react";
import "./Vote.less";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
import ThemeContext from "./ThemeContext";

const Vote = function Vote() {
  let [supNum, setSupNum] = useState(0),
    [oppNum, setOppNum] = useState(0);

  // useCallback的作用是：把函数的引用地址缓存起来，避免每次渲染都创建新的函数
  const change = useCallback(
    (type) => {
      if (type === "sup") {
        setSupNum(supNum + 1);
        return;
      }
      setOppNum(oppNum + 1);
    },
    [supNum, oppNum]
  );
  // 这里的supNum和oppNum是闭包引用，useCallback会把函数的引用地址缓存起来
  return (
    <ThemeContext.Provider value={{ supNum, oppNum, change }}>
      <div className="vote-box">
        <div className="header">
          <h2 className="title">禁止裁员</h2>
          <span className="num">{supNum + oppNum}</span>
        </div>
        <VoteMain supNum={supNum} oppNum={oppNum} />
        <VoteFooter change={change} />
      </div>
    </ThemeContext.Provider>
  );
};

export default Vote;
