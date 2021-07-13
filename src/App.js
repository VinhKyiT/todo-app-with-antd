import { Button, Layout, Row, Col } from "antd";
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
  const [formValue, setFormValue] = useState({});

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

  function handleToggleForm() {
    setIsDisplayForm(!isDisplayForm);
  }

  const onCloseForm = () => {
    setIsDisplayForm(false);
  }

  const onSubmitData = (data) => {
    let taskToUpdate = tasks.findIndex(item => item.id === data.id)
    if (taskToUpdate !== -1) {
      let newTasks = tasks.map(task => {
        if (task.id === data.id) {
          task.status = data.status;
          task.name = data.content;
        }
        return task;
      });
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    } else {
      let newTaskList = [{ id: randomstring(5), name: data.content, status: data.status }, ...tasks];
      setTasks(newTaskList);
      localStorage.setItem('tasks', JSON.stringify(newTaskList));
    }
  }

  function onDeleteClick(id) {
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const onEditClick = (id) => {
    setFormValue(tasks.find(task => task.id === id));
    setIsDisplayForm(true);
  }

  const onStatusClick = (id) => {
    let newTasks = tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <>
      <NavbarComp />
      <Content className="mt-3 content">
        <Row gutter="16">
          <Col span={6}>
            {isDisplayForm ? <TaskForm onCloseForm={onCloseForm} formValue={formValue} onSubmitData={onSubmitData} /> : ''}
          </Col>
          <Col span={isDisplayForm ? '18' : '24'}>
            <Row className="mb-2">
              <Button type="primary" onClick={handleToggleForm} shape="round"><FaPlusCircle /> Thêm công việc</Button>
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
              <TaskList tasks={tasks}
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
                onStatusClick={onStatusClick}
              />
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default App;
