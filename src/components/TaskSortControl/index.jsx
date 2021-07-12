import React from 'react';
import { Button, Menu, Dropdown } from 'antd';

function TaskSortControl() {

    const menu = (
        <Menu>
            <Menu.Item key="a-z">Tên A-Z</Menu.Item>
            <Menu.Item key="z-a">Tên Z-A</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="active">Kích hoạt</Menu.Item>
            <Menu.Item key="inactive">Ẩn</Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown overlay={menu} trigger={['click']}>
                <Button>Tên A-Z</Button>
            </Dropdown>
        </>
    );
}

export default TaskSortControl;