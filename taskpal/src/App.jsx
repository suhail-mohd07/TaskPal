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

  return (
    <>
      <h1>Hello, I am TaskPal</h1>
      <p>Your Friendly Task Manager</p>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      <button>Clear all tasks</button>
    </>
  )
}

export default App
