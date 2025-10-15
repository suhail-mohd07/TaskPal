import ProgressTracker from "./Components/ProgressTracker"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"

function App() {
  return (
    <>
      <h1>Hello, I am TaskPal</h1>
      <p>Your Friendly Task Manager</p>
      <TaskForm/>
      <TaskList/>
      <ProgressTracker/>
      <button>Clear all tasks</button>
    </>
  )
}

export default App
