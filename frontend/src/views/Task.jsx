import React from "react";
import './Task.less';
import { DatePicker } from 'antd';

class Task extends React.Component {
    render() {
        return (
            <div className="task-box">
                <h2 className="title">TASK OA</h2>
                <DatePicker />
            </div>
        );
    }
}

export default Task;