import React, { useState, useEffect } from "react";
import WeatherCard from "../components/weatherCard/weatherCard";

export function Weather() :JSX.Element {
    const [weather, setWeater] = useState();
    const [locations, setLocations] = useState();

    useEffect(() => {
        handleClick();
    }, [] //Check if something should be added to array. If sth is added --> make handleClick function an async&await function?
    );

    function handleClick() {
        fetch(
            'http://api.openweathermap.org/data/2.5/weather?q={locations}&&appid={REACT_APP_API_KEY}units={metric}&lang={de}'
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
                setWeater(object);
                console.log(weather);
            })
            .catch((error) => console.log(error));
        }

    return(
        <div></div>
    )
}
// ---------------------------------------------------------------------------------------------------------------
// From: How to build a Weather App with React and React Hooks, Nishant Kumar, freecodecamp
//     const [lat, setLat] = useState<number>();
//     const [long, setLong] = useState<number>();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           setLat(position.coords.latitude);
//           setLong(position.coords.longitude);
//         });

//         console.log("Latitude is:", lat)
//         console.log("Longitude is:", long)
    
//         await fetch(`${process.env.REACT_APP_API_URL}&appid=${process.env.REACT_APP_API_KEY}`)
//                 .then(res => res.json())
//                 .then(result => {
//                     setData(result)
//                     console.log(result);
//                 });
//     }
//     fetchData();
//     console.log(data);
//       }, [lat, long]);

//       return(
//           <div>
//               {(typeof lat != undefined) ? (<WeatherCard name={""} />) : (<div>empty</div>)}
//           </div>
//       )