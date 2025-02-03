
import { useState } from "react";

function ToDoList() {
    // L7ala dyal tasks: Liste li ghadi n7att fihom l'tasks
    const [tasks, setTasks] = useState([]); 

    // L7ala dyal text: Li katmchi m3aha l'input
    const [text, setText] = useState(''); 

    // Fonction bach tzid task f l'array
    const addTask = () => {
            // Ziyada task jdida f l'array tasks
            setTasks([...tasks, text]); 
            setText("");
    };            // Ziyada task jdida f l'array tasks

  // Ziyada task jdida f l'array tasks

    return (
        <div>
            <h1>To-Do List</h1>
            <label >WRITE YOUR TASK</label>
            {/* L'input dyal task, li kaytsajil fiha chi task */}
            <input 
                type="text" 
                value={text}  // L'input ghadi yb9a dayman m3a text
                onChange={(e) => setText(e.target.value)}  // Kima kaydkhl chi kalim f l'input, kaytbadl text
                placeholder="Type your task here..." 
                id="task-input"
            />
            {/* Button li kay3tik t7ell l'ajout de task */}
            <button onClick={addTask}>Add Task</button>
            
            {/* Kay3rdo l'list dyal tasks */}
            <ul>
                {/* Katloop 3la l'array dyal tasks bach t7att kol task fi <li> */}
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
