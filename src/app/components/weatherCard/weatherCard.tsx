import React from "react";
import styles from './weatherCard.module.css';

export type WeatherCardProps = {
    value: string,
    temp: number,
    tempMin: number,
    tempMax:number
}


export default function WeatherCard({value, temp, tempMin, tempMax}:WeatherCardProps):JSX.Element {
    return(
        <section className={styles.container}>
            <div className={styles.top}>
                <h1>{value} Stadtname</h1>
                <h2>{temp} Temp in der Stadt</h2>
            </div>
            <div className={styles.bottom}>
                <h3>{tempMin}Min Temp: 14°C</h3>
                <h3>{tempMax}Max Temp: 17°C</h3>
            </div>
        </section>
        
    )
}