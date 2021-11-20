import React from "react";
import WeatherCard from "./weatherCard";

export default {
    title: 'Component/WeatherCard',
    component: WeatherCard,
  };

  export const Card = () : JSX.Element => <WeatherCard value="" todayTemp="" todayTempMin="" todayTempMax="" />