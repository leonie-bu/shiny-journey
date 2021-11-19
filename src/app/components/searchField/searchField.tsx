import React from "react";
import styles from './searchField.module.css';

type SearchFieldProps = {
    value: string,
    onChange: (value:string) => void

};

export default function SearchField({value, onChange}:SearchFieldProps) :JSX.Element {
    function handleSubmit() {(event:React.FormEvent<HTMLInputElement>) =>
        {event.preventDefault()}
    };
    
    return(
        <form className={styles.search} onSubmit={handleSubmit}>
            <input className={styles.searchInput} type="text" placeholder="Gib eine Stadt ein" value={value} onChange={(event) => onChange(event.target.value)} />
            <button className={styles.searchButton} type="submit">Suche</button>
        </form>
    )
}