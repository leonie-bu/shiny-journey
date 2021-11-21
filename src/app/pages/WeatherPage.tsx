import React, { useState, useEffect } from "react";
import WeatherCard from "../components/weatherCard/weatherCard";

export function Weather() :JSX.Element {
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });

        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)
    
        await fetch(`${process.env.REACT_APP_API_URL}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
    }
    fetchData();
    console.log(data);
      }, [lat, long]);

      return(
          <div>
              {(typeof lat != undefined) ? (<WeatherCard name={""} />) : (<div>empty</div>)}
          </div>
      )
}