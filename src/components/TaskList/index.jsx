import React from 'react';
import { Button, Col, Row, Table, Tag } from 'antd';

function TaskList(props) {
    let { tasks } = props;

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
            status: task.status ? <Tag color="green">Hoàn thành</Tag> : <Tag color="volcano">Ẩn</Tag>,
            action: <Button type="primary" shape="round">Thêm</Button>
        }
    ))
    console.log(data)

    return (
        <>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} bordered tableLayout="fixed" />
                </Col>
            </Row>
        </>
    );
}

export default TaskList;
