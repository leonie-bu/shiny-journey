import React from "react";
import styles from './searchField.module.css';

type SearchFieldProps = {
    value: string,
    onChange: (value:string) => void,
    className?: string

};

export default function SearchField({value, onChange}:SearchFieldProps) :JSX.Element {
    
    return(
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Gib eine Stadt ein" value={value} onChange={(event) => onChange(event.target.value)} />
            <button className={styles.searchButton} type="submit">Suche</button>
        </div>
    )
}