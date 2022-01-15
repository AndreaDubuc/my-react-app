import React, {useState} from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo.js";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);
    
    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }
    
    if (loaded && props.latitude === forecast.lat && props.longitude === forecast.lon){
        return (
            
                <div className ="WeatherForecast">
                    <h3>Hourly</h3>
                    <hr />

                    <div className="weather-forecast row">
<ForecastInfo data={forecast.list[0]} />
          <ForecastInfo data={forecast.list[1]} />
          <ForecastInfo data={forecast.list[2]} />
          <ForecastInfo data={forecast.list[3]} />
          <ForecastInfo data={forecast.list[4]} />
          <ForecastInfo data={forecast.list[5]} />
        </div>
      </div>
            
     );
    }else{
        const apiKey =`775e9c304f4c99854ae283105fb24c72`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely&appid=${apiKey}&units=metric`
        axios.get(url).then(handleForecastResponse);
        return(
            null);

        }
} 