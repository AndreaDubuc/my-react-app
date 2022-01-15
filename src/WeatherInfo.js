import React from "react";
import DateTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherDescription from "./WeatherDescription";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="DateTime">
                <DateTime currentDate={props.data.date} />
            </div>
            <div className="current-weather">
                <div className="row weather-icon">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>
                <div className= "row">
                    <h2 className="location text-uppercase">{props.data.city}</h2>
                </div> 
            </div> 
            <div className="weather-description">
                <WeatherDescription unit={props.unit} setUnit={props.setUnit} tempMax={props.data.tempMax} tempMin={props.data.tempMin} feelsLike={props.data.feelsLike} humidity={props.data.humidity} wind={props.data.wind}/>
            </div>
        </div>
    );
}