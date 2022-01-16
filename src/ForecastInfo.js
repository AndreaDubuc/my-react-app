import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastInfo(props) {
  function days() {

    let days=[
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];
    let date = new Date(props.data.dt * 1000);

    let day = date.getDay();
    return `${days[day]}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.temp.day);

    return `${temperature}°C`;
  }
console.log(props.data)
  return (
    <div className="ForecastInfo d-flex flex-column col-2">
      {days()}
      <WeatherIcon code={props.data.weather[0]} />
      {temperature()}
    </div>
  );
}