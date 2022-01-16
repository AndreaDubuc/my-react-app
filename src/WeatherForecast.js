import React, {useState} from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo.js";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);
    
    function handleForecastResponse(response){
        let forecasts=response.data.daily;
        //forecasts.splice(5);
        console.log();
        setForecast(forecasts.splice(1,6));
        setLoaded(true);
    }
    
    if (forecast){
        return (
            
                <div className ="WeatherForecast">
                    
                    <hr />
                    <div className="weather-forecast row">
                       {forecast.map((day)=>{
                           console.log('test');
                           return (<ForecastInfo data={day}/>)
                       })}
                    </div>
      </div>
            
     );
    }else{
        const apiKey =`775e9c304f4c99854ae283105fb24c72`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`
        axios.get(url).then(handleForecastResponse);
        return(
            null);

        }
} 