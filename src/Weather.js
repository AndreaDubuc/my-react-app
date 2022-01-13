import React, {useState} from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData]= useState({ready:false});
  const [city,setCity]=useState(props.defaultCity);
  const [unit,setUnit] = useState("celsius");
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
      city:response.data.name,
      icon:response.data.weather[0].icon,
      latitude:response.data.coord.lat,
      longitude:response.data.coord.lon
    });
  }
  function showCurrentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey =`cbac4526bdb23912f197d795becdbdc7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }
  function searchLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentPosition);
  }
  function search(){
    const apiKey =`cbac4526bdb23912f197d795becdbdc7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
  event.preventDefault();
    search();
    if(handleResponse){
      setCity(event.target.reset());
    }
    }
  function handleCityChange(event){
    setCity(event.target.value);
  }
  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="searchForm">
          <div className="row">
            <form className="col-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search city..."
                className="search-holder"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </form>
            <button className="magnifying-glass col-3" onClick={searchLocation}>
              <i className="fas fa-search-location" />
            </button>
          </div>
        </div> 
        <WeatherDetails data={weatherData} unit={unit} setUnit={setUnit}/>
      <div>
       <Forecast unit={unit} setUnit={setUnit} city={weatherData.city} latitude={weatherData.latitude} longitude={weatherData.longitude}/>
      </div>
      </div>
    );
  } else{  
    search();

    return(
        <div className="Weather">
            <div className="search-form">
            <div className="row">
             <form className="col-6">
               <input 
                type="text" 
                placeholder="Enter a city..."
                className="search-input"
                autoComplete="off"
                />  
         </form>
         <button className="magnifying-glass col-3">
             <i className="fas fa-search-location"/>
         </button>
            </div>
            </div>  
            <div className="date-time"></div>
            <div className="current-weather">
<div className="row">
    <img
    src="img"
    className="main-icon"
    alt="weather icon 1"/>
</div>
<h1>
    <span className="temp-value">--</span>
    <span>
        <button className="btnCelsius">
            °C|
        </button>
        <button className="btnFahrenheit">
            °F
        </button>
    </span>
    </h1>
    <div className="row">
        <h2 className="location">loading...</h2>
    </div>
    </div>
    <div className="weather-description">
<div className="row">
<div className="col max-min deg"><strong>--</strong></div>
            <div className="col feels-like deg"><strong>--</strong></div>
            <div className="col humidity deg"><strong>--</strong></div>
            <div className="col wind deg"><strong>--</strong></div>
</div>
<div className="row">
<div className="col">Max/Min</div>
<div className="col">Precipitation</div>
<div className="col">Humidity</div>
<div className="col">Wind</div>
</div>
</div>
<div className="temp-hours row">
<div className="col">
    <div className="row">
        <div className="col"></div>
    </div>
<div className="row">
    <div className="col">
        <img
    src="img"
    className="main-icon"
    alt="weather icon 2"/>
    </div>
</div>
<div className="row">
<div className="col deg-hour"> <strong></strong></div>
</div>
</div>
</div>

<div className="temp-week-days row">
    <div className="col">
        <div className="row">
            <div className="col"></div>
        </div>
        <div className="row">
            <div className="col">
<img
    src="img"
    className="main-icon"
    alt="weather icon 3"/>
                
            </div>
        </div>
<div className="row">
              <div className="col deg-days"><strong></strong></div>
            </div>  
          </div>  
        </div>
      </div>
    );
  }
}

    
                 

                


