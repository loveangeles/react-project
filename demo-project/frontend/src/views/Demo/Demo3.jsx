import React, { useState, useMemo } from "react";
import { Button } from "antd";
import "./Vote.less";

const Demo3 = function Demo3() {
  let [supNum, setSupNum] = useState(0);
  let [oppNum, setOppNum] = useState(0);
  let [x, setX] = useState(0);
  let ratio = useMemo(() => {
    console.log("计算支持比率");
    let ratio = "--";
    let total = supNum + oppNum;
    if (total > 0) {
      ratio = ((supNum / total) * 100).toFixed(2) + "%";
    }
    return ratio;
  }, [supNum, oppNum]);
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">禁止裁员</h2>
        <span className="num">{supNum + oppNum}</span>
      </div>
      <div className="content">
        <p className="num">支持: {supNum}</p>
        <p className="num">反对: {oppNum}</p>
        <p className="num">支持比率： {ratio}</p>
      </div>
      <div className="footer">
        <Button
          type="primary"
          size="small"
          onClick={() => {
            setSupNum(supNum + 1);
          }}
        >
          支持
        </Button>
        <Button
          type="primary"
          danger
          size="small"
          onClick={() => {
            setOppNum(oppNum + 1);
          }}
        >
          反对
        </Button>
        <Button
          type="secondary"
          size="small"
          onClick={() => {
            setX(x + 1);
          }}
        >
          点着玩
        </Button>
      </div>
    </div>
  );
};

export default Demo3;
