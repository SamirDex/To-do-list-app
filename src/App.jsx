import { Header } from "./Components/header"
import { Tasks } from "./Components/Tasks"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCALE_STORAGE_KEY = "todo:savedtasks"
function App() {
    const [tasks, setTasks] = useState([]); 
    
    function SavedTasks() {
        const saved = localStorage.getItem(LOCALE_STORAGE_KEY); 
        console.log(saved);
        if(saved) {
            setTasks(JSON.parse(saved)); 
        }
    }

    useEffect (() => {
        SavedTasks(); 
    },[])

    function setTasksandSave (newTask) {
        setTasks(newTask); 
        localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(newTask)); 
    }

    function addTask(TaskTitle) {
        setTasksandSave([
            ...tasks,
            {
                id: uuidv4(), 
                title: TaskTitle, 
                isCompleted: false
            }
        ])
    }

    function CompletedTasks(taskId) {
        const newTasks = tasks.map (task => {
            if(task.id == taskId) {
                return {
                    ...task, 
                    isCompleted: !task.isCompleted
                }
            }
            return task; 
        })
        setTasksandSave(newTasks); 
    }

    function deleteTask(taskId) {
        const newTask = tasks.filter(task => task.id != taskId ); 
        setTasksandSave(newTask); 
    }

    return (
        <>
            <Header onAddTask={addTask}/>
            <Tasks tasks={tasks} onCompleted ={CompletedTasks} onDelete= {deleteTask}/>
        </>
    )
}

export default App
