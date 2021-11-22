import React from "react";
import styles from './searchField.module.css';

type SearchFieldProps = {
    locations: string,
    setLocations: (locations:string) => void,
    className?: string,
    handleClick: () => void,

};

export default function SearchField({locations, setLocations, handleClick}:SearchFieldProps) :JSX.Element {
    
    return(
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Gib eine Stadt ein" value={locations} onChange={(event) => setLocations(event.target.value)} />
            <button className={styles.searchButton} onClick={handleClick}>Suche</button>
        </div>
    )
}