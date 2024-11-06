// Main.js
import React, { useState, useEffect } from 'react';

export default function Main() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = () => {
        if (input) {
            const newTasks = [...tasks, input];
            setTasks(newTasks);
            localStorage.setItem("tasks", JSON.stringify(newTasks));
            setInput("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    return (
        <div>
            <h1>Список задач</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите задачу"
            />
            <button onClick={addTask}>Добавить</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => deleteTask(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
