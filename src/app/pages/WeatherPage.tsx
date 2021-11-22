import React, { useState, useEffect } from "react";
import SearchField from "../components/searchField/searchField";

export function Weather() :JSX.Element {
    const [locations, setLocations] = useState('');
    const [weather, setWeather] = useState({});
   
    
    useEffect(() => {
                handleClick();
            }, []
            );
        
            function handleClick() {
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=7a95b81b02eff1a081f3d8c8501afa0e&lang=de&units=metric`
                )
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
                };

    return(
        <div>
            <SearchField locations={locations} setLocations={setLocations} handleClick={handleClick}/>
            {/* <div>{weatherData !== null && weatherData.main.map((data,key) => 
            <WeatherCard minTemp={data.temp_min} maxTemp={data.temp_max} key={key} />
            )}</div> */}
        </div>
    )
};