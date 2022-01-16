import React, {useState} from "react";

import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props){
const [unit, setUnit]= useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius * 9) / 5 + 32;
    }
  console.log(props.data)
    if (unit === "celsius"){
        return(   
            <div className="CurrentWeather d-flex justify-content-center">
                <h1>
                    <span id="temperature">{Math.round(props.celsius)}</span>
                </h1>
               
        <div className="units my-auto">
          <span className="C" id="celsius-link">
            °C
          </span>{" "}
          |
          <span className="F" id="fahrenheit-link">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <div>
          <WeatherIcon code={props.data}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather d-flex justify-content-center">
        <h1>
          <span id="temperature">{Math.round(fahrenheit())}</span>
        </h1>
        <div className="units my-auto">
          <span className="C" id="celsius-link">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>{" "}
          |
          <span className="F" id="fahrenheit-link">
            °F
          </span>
        </div>
      </div>
    );
  }
}