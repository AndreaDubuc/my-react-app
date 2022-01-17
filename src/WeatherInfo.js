import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
     let now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  return (
    <div className="WeatherInfo">
      <h2 id="city">{props.data.city}</h2>
      <h3 id="date">
        {day}, {month} {date} 
      </h3>
      <CurrentWeather data={props.data} celsius={props.data.temperature} />
      <div className="row descriptions">
        <div className="col-6">
          <h3 id="description">{props.data.description}</h3>
        </div>
        <div className="col-6">
          <h3 id="max_min">
            {props.data.min}°/{props.data.max}°
          </h3>
        </div>
      </div>
      <br />
      <div className="row details" id="detail">
        <div className="col-6" id="wind">
          <h4>
            <strong>Wind:</strong> {props.data.wind} km/h
          </h4>
        </div>
        <div className="col-6" id="humidity">
          <h4>
            <strong>Humidity:</strong> {props.data.humidity}%
          </h4>
        </div>
      </div>
    </div>
  );
}