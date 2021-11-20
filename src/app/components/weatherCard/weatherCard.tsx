import React from "react";
import styles from './weatherCard.module.css';

export type WeatherCardProps = {
    id?: number,
    value: string,
    todayTemp: string,
    todayTempMin: string,
    todayTempMax: string,
    todayRain?: boolean,
    seven_DaysTemp?: string,
    seven_DaysTempMin?: string,
    seven_DaysTempMax?: string,
    seven_DaysRain?: boolean,
}


export default function WeatherCard({value, todayTemp, todayTempMin, todayTempMax}:WeatherCardProps):JSX.Element {
    return(
        <section className={styles.container}>
            <div className={styles.top}>
                <h1>{value} Stadtname</h1>
                <h2>{todayTemp} Temp in der Stadt</h2>
            </div>
            <div className={styles.bottom}>
                <h3>{todayTempMin}Min Temp: 14°C</h3>
                <h3>{todayTempMax}Max Temp: 17°C</h3>
            </div>
        </section>
        
    )
}