import { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTodo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    // Fetch tasks from backend
    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/v1/tasks');
            setTasks(res.data);
        } catch (err) {
            console.error('Error fetching tasks:', err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Add a new task
    const addTask = async () => {
        if (input.trim()) {
            try {
                const res = await axios.post('http://localhost:3000/api/v1/tasks', {
                    text: input,
                });
                setTasks([...tasks, res.data]);
                setInput('');
            } catch (err) {
                console.error('Error adding task:', err);
            }
        }
    };

    // Remove a task
    const removeTask = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`);
            setTasks(tasks.filter((task) => task._id !== id));
        } catch (err) {
            console.error('Error deleting task:', err);
        }
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a task..."
                    className="input"
                />
                <button onClick={addTask} className="button">Add</button>
            </div>

            <ul className="list">
                {tasks.map((task) => (
                    <li key={task._id} className="list-item">
                        {task.text}
                        <button onClick={() => removeTask(task._id)} className="delete-button">❌</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default CreateTodo;