import React from 'react'

export default function TaskForm() {
    return (
            <form>
                <div>
                    <input type="text" placeholder="Enter the task" />
                    <button type="submit">Add Task</button>
                </div>

                <div>
                    <select name="priority" id="">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    
                    <select name="category" id="">
                        <option value="general">General</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>
                </div>
            </form>
    )
}
