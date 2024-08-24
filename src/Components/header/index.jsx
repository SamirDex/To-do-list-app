import styles from "./header.module.css"
import { GoPlusCircle } from "react-icons/go";
import todologo from "./../../assets/Logo.svg"
import { useState } from "react";

export function Header({  onAddTask }) {

    const [title, setTitle] = useState(''); 

    function handleSubmit(e) {
        e.preventDefault(); 
        onAddTask(title); 
        setTitle(''); 
    }

    function onchangeTitle(event) {
        setTitle(event.target.value); 
    }

    return (
        <header className={styles.header}>
            <img src={todologo} alt="" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}> 
                <input type="text" placeholder="add a new task" value={title} onChange={onchangeTitle}/>
                <button>Create <GoPlusCircle size={20}/></button>
            </form>
        </header>
    )
}