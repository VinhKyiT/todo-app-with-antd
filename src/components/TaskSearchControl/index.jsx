import React from 'react';
import { Input } from 'antd';

function TaskSearchControl() {
    return (
        <>
            <Input.Search allowClear name="keyword" placeholder="Nhập từ khoá" />
        </>
    );
}

export default TaskSearchControl;