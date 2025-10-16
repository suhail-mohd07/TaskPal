import { useEffect, useState } from "react"
import ProgressTracker from "./Components/ProgressTracker"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"

function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

  const addTask = (task) => { 
    setTasks([...tasks, task]);
  }

  return (
    <>
      <h1>Hello, I am TaskPal</h1>
      <p>Your Friendly Task Manager</p>
      <TaskForm addTask = {addTask}/>
      <TaskList/>
      <ProgressTracker/>
      <button>Clear all tasks</button>
    </>
  )
}

export default App
