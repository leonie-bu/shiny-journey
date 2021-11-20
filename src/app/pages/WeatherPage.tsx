import React, { useState} from "react";
import styles from './WeatherPage.module.css';
import SearchField from "../components/searchField/searchField";

export default function Weather():JSX.Element {
    const[city, setCity] = useState('');

    function handleChange(value:string){
        setCity(value);
    };

    return(
        <form onSubmit={(event) => event.preventDefault()} className={styles.container}>
            <SearchField  value={city} onChange={(value:string) => handleChange(value)} />
        </form>
        
    );
}