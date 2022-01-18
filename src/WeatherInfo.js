import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./WeatherInfo.scss";

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
      <br />
      <div className="row descriptions">
        
          <h3 classNameid="description">{props.data.description}</h3>
        </div>
      
      <br />
      <div className="d-flex flex-row justify-content-between" id="detail">
        
          <span>
            <strong>Wind:</strong> {props.data.wind} km/h
          </span>
  
      
          <span id="max_min">
            <strong>Max/Min:</strong> {props.data.max}°/{props.data.min}°
          </span>
        
          <span>
            <strong>Humidity:</strong> {props.data.humidity}%
          </span>
    </div>
    </div>

  );
}