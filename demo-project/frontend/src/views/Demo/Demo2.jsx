import React from "react";
import { Button } from "antd";
import "./Demo.less";

const Demo2 = function Demo2() {
  let [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="demo">
      <span className="num">{count}</span>
      <Button type="primary" size="small" onClick={handleClick}>
        新增
      </Button>
    </div>
  );
};

export default Demo2;
