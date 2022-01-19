import React, {useState} from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData]= useState({ready:false});
  const [city,setCity]=useState(props.defaultCity);
  function handleResponse(response){
    setWeatherData({
      ready:true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
      city:response.data.name,
      icon:response.data.weather[0].icon,
      latitude:response.data.coord.lat,
      longitude:response.data.coord.lon,
      description:response.data.weather[0].description[0].toUpperCase()+ response.data.weather[0].description.substring(1)
    });
  }

 function handleSubmit(event){
  event.preventDefault();
    search();
    if(weatherData){
      setCity(event.target.reset());
    }


     }
  function handleCityChange(event){
    setCity(event.target.value);
  }

function search(){
    const apiKey =`17ae01a53895e80cdf2ee32380ed9529`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }


   
  if (weatherData.ready){
    return (
      <div className="WeatherApp">
        <div className="container">
        <div className="weather_app_wrapper">
          <div className="weather_app">

<br />
            <form className="d-flex justify-content-end"
            onSubmit={handleSubmit}
            id="search-form"
            >
              <input
                type="text"
                placeholder="Search city..."
                aria-label="Search"
                autoComplete="off"
                id="search_bar"
                onChange={handleCityChange}
              />
              <button type="submit" className="search_icon">
                  <i className="fas fa-search"></i>
                </button>
            </form>
            
            
<WeatherInfo data={weatherData}/> 
<br/> 
<WeatherForecast  city={weatherData.city} defaultCity={props.defaultCity} lat = {weatherData.latitude} lon={weatherData.longitude}/> 
</div>
<small className="small">

      <a className="links" href="https://github.com/AndreaDubuc/my-react-app"
      target="_blank" rel="noopener noreferrer"> Open source code </a> {" "} by {""}
      
      <a className="links" href="https://www.instagram.com/_andreacodes/" target="_blank" rel="noopener noreferrer"> Andrea Dubuc </a>
          
{" "}2022

</small>
</div>
</div>
</div>
      
    );
  } else{  
    search();
    

    return "Loading...";
  }
  }
        