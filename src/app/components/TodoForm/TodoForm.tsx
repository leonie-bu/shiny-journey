import React, { useState } from "react";
import styles from './TodoForm.module.css';

type TodoFormProps = {
    value: string;
    onChange: () => void;

}

export default function TodoForm ({value, onChange}: TodoFormProps): JSX.Element {
    const[todo, setTodo] = useState("");
    
    function handleSubmit() {(event:React.FormEvent<HTMLInputElement>) =>
        {event.preventDefault()}
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="Enter To Do Here" className={styles.input}></input>
            <button className={styles.button}>Add</button>
        </form>
        
    )
}