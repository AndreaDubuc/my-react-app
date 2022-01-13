import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast(props){
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }
    
    function temperature() {
      let temperature = Math.round(props.data.temp);
      let temperatureFahr = Math.round((temperature  * 9)/ 5 + 32);
      if(props.unit==="celsius"){
          return `${temperature}°`;
      }else{
          return `${temperatureFahr}°`;;
      }
    }
    return (
        <div className = "HourlyForecast col">
            <div>{hours()}</div>
            <WeatherIcon code={props.data.weather[0].icon}/>  
            <div className="deg-hour"> <strong>{temperature()}</strong></div>
        </div>
    )  

}