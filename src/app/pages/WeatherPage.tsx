import React, { useState, useEffect } from "react";

export function Weather() :JSX.Element {
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
    
        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)
      }, [lat, long]);

      return(
          <div></div>
      )
}