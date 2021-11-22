import React from "react";
import styles from './weatherCard.module.css';

export type WeatherCardProps = {
    minTemp: number;
    maxTemp: number;
}


export default function WeatherCard({minTemp, maxTemp}:WeatherCardProps):JSX.Element {
    return(
        <div className={styles.top}>
            <h2>Stadt: </h2>
            <h2>{minTemp}°C</h2>
            <h2>{maxTemp}°C</h2>
        </div>
        
    )
}