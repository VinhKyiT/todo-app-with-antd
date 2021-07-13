import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Button, Card, Space } from 'antd';
import { FaRegTimesCircle } from "react-icons/fa";
import './TaskForm.css';

function TaskForm(props) {
    const onCloseForm = () => { props.onCloseForm(); }
    let { formValue } = props;
    const [content, setContent] = useState('');
    const [status, setStatus] = useState(false);
    const [id, setId] = useState('');
    const onSubmitData = (e) => {
        e.preventDefault();
        props.onSubmitData({ content, status, id });
        setContent('');
        setStatus(false);
        setId('');
    }
    useEffect(() => {
        if (formValue !== {}) {
            setContent(formValue.name);
            setStatus(formValue.status);
            setId(formValue.id);
        }
    }, [formValue]);
    return (
        <>
            <Card title="Thêm công việc" extra={<span className="card_header-icon" onClick={onCloseForm}><FaRegTimesCircle /></span>}>
                <Form onSubmit={onSubmitData}>
                    <FormGroup>
                        <Label>Tên:</Label>
                        <Input
                            type="text"
                            name="content"
                            id="content"
                            value={content}
                            onChange={e => setContent(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mt-2">
                        <Label>Trạng thái:</Label>
                        <Input
                            type="select"
                            name="status"
                            id="status"
                            value={status}
                            onChange={e => setStatus(JSON.parse(e.target.value))}>
                            <option value={false}>Ẩn</option>
                            <option value={true}>Kích hoạt</option>
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