import React, { useMemo } from "react";
import timg from "../assets/images/timg.jpg";
import "./HomeHead.less";

const HomeHead = function HomeHead(props) {
  let { today } = props;
  let date = useMemo(() =>{
    let [year, month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/);
    let area = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    return {
      month: area[+month] + '月',
      day: day
    };
  }, [today]);
  
  return (
    <header className="home-head-box">
      <div className="info">
        <div className="time">
            <span>{date.day}</span>
            <span>{date.month}</span>
        </div>
        <h2 className="title">知乎日报</h2>
      </div>
      <div className="picture">
        <img src={timg} alt="" />
      </div>
    </header>
  );
};
export default HomeHead;
