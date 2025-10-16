import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault(); // refresh
        addTask({text: task, priority, category, completed: false});

        // reset
        setTask('');
        setPriority('medium');
        setCategory('general');
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Enter the task" value={task}
                    onChange={(e) => setTask(e.target.value)} />
                    <button type="submit">Add Task</button>
                    <h1>{task} {priority} {category}</h1>
                </div>

                <div>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="general">General</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>

                    <input type="time" name="" id="" />
                </div>
            </form>
    )
}
