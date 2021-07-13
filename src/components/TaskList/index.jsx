import React from 'react';
import { Button, Col, Row, Space, Table, Tag } from 'antd';

function TaskList(props) {
    let { tasks, onDeleteClick, onEditClick, onStatusClick } = props;

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
        }
    ]

    const data = tasks.map((task, index) => (
        {
            key: task.id,
            stt: index + 1,
            name: task.name,
            status: task.status ? <Tag style={{ cursor: "pointer" }} color="#87d068" onClick={() => onStatusClick(task.id)}>Hoàn thành</Tag> :
                <Tag style={{ cursor: "pointer" }} onClick={() => onStatusClick(task.id)} color="#f50">Ẩn</Tag>,
            action:
                <Space>
                    <Button type="primary" shape="round" onClick={() => onEditClick(task.id)}>Sửa</Button>
                    <Button htmlType="reset" type="danger" shape="round" onClick={() => onDeleteClick(task.id)}>Xoá</Button>
                </Space>
        }
    ))

    return (
        <>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} bordered tableLayout="fixed" />
                </Col>
            </Row>
        </>
    );
}

export default TaskList;
