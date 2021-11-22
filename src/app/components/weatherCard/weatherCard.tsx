import React from "react";
import styles from './weatherCard.module.css';

export type WeatherCardProps = {
    weather: string;
}


export default function WeatherCard({weather}:WeatherCardProps):JSX.Element {
    return(
        <div className={styles.top}>
            <h2>Temperatur:</h2>
        </div>
        
    )
}