import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props){
function days(){
let date = new Date(props.dataDay.dt * 1000);
let days = ["Sun", "Mon", "Tue", "Wed", "Thur","Fri", "Sat"];
let day = days[date.getDay()];
return(`${day}`);

}

function temperature(){
let tempMax =Math.round(props.dataDay.temp.max);
let tempMin= Math.round(props.dataDay.temp.min);
let tempMaxFahr = Math.round((tempMax * 9)/5+32);
let tempMinFahr = Math.round((tempMin * 9)/5 + 32);
if (props.unit==="celsius"){
    return `${tempMax}°/${tempMin}°`;

}else{
    return `${tempMaxFahr}°/${tempMinFahr}°`;
}
}

return(
    <div className="DayForecast">
<div>{days()}</div>
<WeatherIcon code={props.dataDay.weather[0].icon}/>
<div className="deg-days"> <strong>{temperature()}</strong></div>
</div>
)



}