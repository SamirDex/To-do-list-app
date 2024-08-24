import styles from "./tasks.module.css"
import { Task } from "./../Task/index.jsx"; 
import { v4 as uuidv4 } from 'uuid';

export function Tasks({ tasks, onCompleted, onDelete }) {
    const tasksQuantity = tasks.length; 
    const complitedTasks = tasks.filter(task => task.isCompleted).length; 

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{complitedTasks} of {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Task key={task.id} task = {task} onCompleted={onCompleted} onDelete={onDelete}/>
                ))}
            </div>
        </section>
    )
}