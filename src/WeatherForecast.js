import React, {useState} from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);
    
    function handleForecastResponse(response){
        setForecast(response.data);
        console.log(forecast);
        setLoaded(true);
    }
    
    if (loaded && props.latitude === forecast.lat && props.longitude === forecast.lon){
        return (
            
                <div className ="temp-week-days row">
                    {forecast.daily.slice(1,5).map(function(DailyForecastItem){
                        return(
                            <DailyForecast dataDay={DailyForecastItem} unit={props.unit} setUnit={props.setUnit}/> );   
                    })} 
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