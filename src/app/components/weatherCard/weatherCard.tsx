import React from "react";
import styles from './weatherCard.module.css';

export type WeatherCardProps = {
    name: string;
}


export default function WeatherCard({name}:WeatherCardProps):JSX.Element {
    return(
        <div className={styles.top}>
            <h2>{name}bhbh</h2>
        </div>
        
    )
}