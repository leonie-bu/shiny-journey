import React from "react";
import styles from './TodoForm.module.css';

type TodoFormProps = {
    todo: string;
    onChange: (todo:string) => void;

}

export default function TodoForm ({todo, onChange}: TodoFormProps): JSX.Element {
    
    function handleSubmit() {(event:React.FormEvent<HTMLInputElement>) =>
        {event.preventDefault()}
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(event) => onChange(event.target.value)} placeholder="Enter To Do Here" className={styles.input}></input>
            <button type="submit" className={styles.button}>Add</button>
        </form>
        
    )
}

