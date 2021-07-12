import { Button, Layout, Space, Row, Col } from "antd";
import TaskForm from './components/TaskForm'
import NavbarComp from './components/Navbar'
import TaskSearchControl from "./components/TaskSearchControl";
import TaskSortControl from "./components/TaskSortControl";
import TaskList from "./components/TaskList";
import { FaPlusCircle } from 'react-icons/fa'
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const { Content } = Layout;

  const [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);

  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      let taskList = JSON.parse(localStorage.getItem("tasks"));
      setTasks(taskList)
    } else {
      console.log('failed to get item');
    }
  }, [])
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  function randomstring(length) {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += s4();
    }
    return str;
  }

  function onGenerate() {
    let tasks = [
      {
        id: randomstring(5),
        name: 'Học lập trình',
        status: true,
      },
      {
        id: randomstring(5),
        name: 'Đi bơi',
        status: false,
      },
      {
        id: randomstring(5),
        name: 'Ngủ',
        status: true,
      }
    ];
    setTasks({
      tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function handleToggleForm() {
    setIsDisplayForm(!isDisplayForm);
  }

  const onCloseForm = () => {
    setIsDisplayForm(false);
  }

  return (
    <>
      <NavbarComp />
      <Content className="mt-3 content">
        <Row gutter="16">
          <Col span={6}>
            {isDisplayForm ? <TaskForm onCloseForm={onCloseForm} /> : ''}
          </Col>
          <Col span={isDisplayForm ? '18' : '24'}>
            <Row className="mb-2">
              <Space>
                <Button type="primary" onClick={handleToggleForm} shape="round"><FaPlusCircle /> Thêm công việc</Button>
                <Button type="ghost" className="ms-3" onClick={onGenerate} shape="round">Generate</Button>
              </Space>
            </Row>
            <Row gutter="16">
              <Col span={12}>
                <TaskSearchControl />
              </Col>
              <Col span={12}>
                <TaskSortControl />
              </Col>
            </Row>
            <Row className="mt-3">
              <TaskList tasks={tasks} />
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default App;
