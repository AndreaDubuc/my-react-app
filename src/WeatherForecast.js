import React, {useState,useEffect} from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo.js";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);
    
    function handleForecastResponse(response){
        let forecasts=response.data.daily;
        setForecast(forecasts.splice(1,6));
        setLoaded(true);
    }
    useEffect(()=>{
        setLoaded(false)
    },[props.lat,props.lon])
    
    if (loaded){
        return (
            
                <div className ="WeatherForecast">
                    
                    <hr className="line" />
                    <div className="weather-forecast row">
                       {forecast.map((day)=>{
                           return (<ForecastInfo data={day}/>)
                       })}
                    </div>
      </div>
            
     );
    }else{
        const apiKey =`17345e5a9602c5517a2ae0955aecb505`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`
        axios.get(url).then(handleForecastResponse);
        return(
            null);

        }
} 