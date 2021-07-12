import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Button, Card, Space } from 'antd';
import { FaRegTimesCircle } from "react-icons/fa";
import './TaskForm.css';

function TaskForm(props) {
    const onCloseForm = () => { props.onCloseForm(); }
    return (
        <>
            <Card title="Thêm công việc" extra={<span className="card_header-icon" onClick={onCloseForm}><FaRegTimesCircle /></span>}>
                <Form>
                    <FormGroup>
                        <Label>Tên:</Label>
                        <Input type="text" name="content" id="content"></Input>
                    </FormGroup>
                    <FormGroup className="mt-2">
                        <Label>Trạng thái:</Label>
                        <Input type="select" name="status" id="status">
                            <option>Ẩn</option>
                            <option>Kích hoạt</option>
                        </Input>
                    </FormGroup>
                    <Space>
                        <Button type="primary" htmlType="submit">Xác nhận</Button>
                        <Button type="danger" htmlType="reset">Huỷ bỏ</Button>
                    </Space>
                </Form>
            </Card>
        </>
    );
}

export default TaskForm;