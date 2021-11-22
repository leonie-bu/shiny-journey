import useFetch from "./useFetch";

type WeatherData = {
    name: string;
    main: [{
        temp: number;
        temp_min: number;
        temp_max: number;
    }]
};

export default function useWeather(locations:string): WeatherData | null {
    const { weather } = useFetch<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=7a95b81b02eff1a081f3d8c8501afa0e&lang=de`);
    return weather;
}