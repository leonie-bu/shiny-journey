import React, { useState} from "react";
import styles from './WeatherPage.module.css';
import SearchField from "../components/searchField/searchField";
import useWeatherCard from "../hooks/useWeather";
import { useParams } from "react-router";
import { WEATHER } from "../lib/weather";
import WeatherCard from "../components/weatherCard/weatherCard";

export default function Weather():JSX.Element {
    const[city, setCity] = useState('');
    const { addWeatherCard } = useWeatherCard();

    function addWeatherCard() {
        const weatherCard = {
            city: WEATHER.city
        }
    }

    const { id }: { id:string } = useParams();

    const filteredWeather = WEATHER.filter((weather) => weather.id === Number(id));

    function handleChange(value:string){
        setCity(value);
    };

    return(
        <section>
            <form onSubmit={(event) => event.preventDefault()} className={styles.container}>
                <SearchField  value={city} onChange={(value:string) => handleChange(value)} />
            </form>
            <section>{filteredWeather.map((weather) => (
                <WeatherCard key={weather.id} {...weatherCard})
            </section>
    </section>
    );
}