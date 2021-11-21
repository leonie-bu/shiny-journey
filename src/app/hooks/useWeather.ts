import useLocalStorage from "./useLocalStorage";
import type { WeatherCards } from '../types';

export default function useWeatherCard(): {
    weatherCards: WeatherCards[];
    addWeatherCard: (weatherCards: WeatherCards) => void;
} {
    const [weatherCards, setWeatherCards] = useLocalStorage<WeatherCards[]>('weatherCards', []);

    function addWeatherCard(weatherCard: WeatherCards){
        setWeatherCards([...weatherCards, weatherCard]);
    }

    return{
        weatherCards,
        addWeatherCard,
    };
}