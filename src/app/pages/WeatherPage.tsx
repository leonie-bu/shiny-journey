import React, { useState} from "react";
import styles from './WeatherPage.module.css';
import SearchField from "../components/searchField/searchField";

export default function Weather():JSX.Element {
    const[city, setCity] = useState('');

    function handleChange(value:string){
        setCity(value);
    };

    return(
        <SearchField value={city} onChange={(value:string) => handleChange(value)} />
    );
}