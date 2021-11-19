import React from "react";
import styles from './TodoForm.module.css';

type TodoFormProps = {
    value: string;
    onChange: (value:string) => void;

}

export default function TodoForm ({value, onChange}: TodoFormProps): JSX.Element {
    
    function handleSubmit() {(event:React.FormEvent<HTMLInputElement>) =>
        {event.preventDefault()}
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Enter To Do Here" className={styles.input}></input>
            <button type="submit" className={styles.button}>Add</button>
        </form>
        
    )
}

