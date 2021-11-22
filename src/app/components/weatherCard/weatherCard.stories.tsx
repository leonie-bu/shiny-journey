import React from "react";
import WeatherCard from "./weatherCard";

export default {
    title: 'Component/WeatherCard',
    component: WeatherCard,
  };

  export const Card = () : JSX.Element => <WeatherCard minTemp={3} maxTemp={4} />