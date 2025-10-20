import { useEffect, useState } from "react"
import ProgressTracker from "./Components/ProgressTracker"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"
import "./Style.css";

function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

  const addTask = (task) => { 
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }
  
  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <>
    <div className="circle"></div>
    <div className="circle1"></div>
    <div className="circle2"></div>
    <div className="circle3"></div>
    <div className="circle4"></div>
    <div className="circle5"></div>
    <div className="circle6"></div>
    <div className="App">
      <h1 className="title">Hello, I am TaskPal</h1>
      <p className="tagline">Your Friendly Task Manager</p>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      {tasks.length && (<button onClick={clearTasks} className="clear-btn">Clear all tasks</button>)}
    </div>
    </>
  )
}

export default App
