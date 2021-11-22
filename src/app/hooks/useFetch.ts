import { useState, useEffect } from "react";

export default function useFetch<T>(url:string): {
    weather: T | null;
    handleClick: () => void;
} {
    const [weather, setWeather] = useState<T | null>(null);

    function handleClick() {
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    console.log(res.status);
                    return res.json();
                } else {
                    if (res.status === 404) {
                        return alert("Oops, there seems to be an error because of a wrong location.");
                    }
                    alert("Oops, there seems to be an error.");
                    throw new Error("You have an error")
                }
            })
            .then((object) => {
                setWeather(object);
                console.log(weather);
            })
            .catch((error) => console.log(error));
        }
        useEffect(() => {
            handleClick();
        }, []
        );
        return { weather, handleClick };
}