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
    console.log(day)
    return `${days[day]}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.temp.day);

    return `${temperature}°C`;
  }

  return (
    <div className="ForecastInfo col-2">
      {days()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}