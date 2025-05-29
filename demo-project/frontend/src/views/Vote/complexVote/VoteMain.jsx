import React ,{ useMemo } from "react";
import PropTypes from "prop-types";
import "./Vote.less";
import ThemeContext from "./ThemeContext";

const VoteMain = function VoteMain(props) {
  let { supNum, oppNum } = props;

  let ratio = useMemo(() => {
    let ratio = "--";
    let total = supNum + oppNum;
    if (total > 0) {
      ratio = ((supNum / total) * 100).toFixed(2) + "%";
    }
    return ratio;
  }, [supNum, oppNum]);

  return (
    <div className="content">
      <p>支持人数：{supNum}人</p>
      <p>反对人数：{oppNum}人</p>
      <p>支持比率：{ratio} </p>
    </div>
  );
};

// 这里的propTypes是一个对象，里面的key就是需要校验的属性名

VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0,
};
VoteMain.propTypes = {
  supNum: PropTypes.number.isRequired,
  oppNum: PropTypes.number.isRequired,
};

export default VoteMain;
