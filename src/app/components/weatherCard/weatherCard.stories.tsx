import React from "react";
import WeatherCard from "./weatherCard";

export default {
    title: 'Component/WeatherCard',
    component: WeatherCard,
  };

  export const Card = () : JSX.Element => <WeatherCard value="" temp={3} tempMin={4} tempMax={5} />