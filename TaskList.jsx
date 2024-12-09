import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
