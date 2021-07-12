import React from 'react';
import { Badge, Button } from 'antd';

function TaskItem(props) {
    let { index, task } = props;
    return (
        <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td className="text-center"><Badge status={task.status ? 'success' : 'error'} text={task.status ? 'Hoàn thành' : 'Ẩn'} /></td>
            <td><Button type="primary" ghost shape="round">Thêm</Button></td>
        </tr>
    );
}

export default TaskItem;