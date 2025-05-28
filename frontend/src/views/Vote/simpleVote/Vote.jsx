import React from "react";
import { Button } from "antd";
import "./Vote.less";

const Vote = function Vote(props) {
    let [count, setCount] = React.useState({
        total: 0,
        support: 0,
        oppose: 0,
    });

    const handleClick = (type) => {
        return () => {
            setCount((prev) => {
                let newCount = { ...prev };
                newCount[type] += 1;
                newCount.total += 1;
                return newCount;
            });
        };
    }

    return (
        <div className="task-box">
            <div className="header">
                <h2 className="title">{props.title}</h2>
                <span classNme="num">投票总数{count.total}</span>
            </div>
            <div className="content">
                <p className="num">支持{count.support}</p>
                <p className="num">反对{count.oppose}</p>
            </div>
            <div className="footer">
                <Button 
                    type="primary" 
                    size="small" 
                    onClick={handleClick('support')}>
                    支持
                </Button>
                <Button 
                    type="primary" 
                    danger
                    size="small" 
                    onClick={handleClick('oppose')}>
                    反对
                </Button>
            </div>
        </div>
    );
}

export default Vote;