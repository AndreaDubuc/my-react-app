import React, {useState} from "react";
import CurrentTime from "./CurrentTime";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData]= useState({ready:false});
  const [city,setCity]=useState(props.defaultCity);
  const [unit,setUnit] = useState("celsius");
  
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
      longitude:response.data.coord.lon
    });
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

function search(){
    const apiKey =`775e9c304f4c99854ae283105fb24c72`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }


   
  if (weatherData.ready){
    return (
      <div className="WeatherApp">
        <div className="container">
        <div className="weather_app_wrapper">
          <div className="weather_app">
<CurrentTime />
<br />
            <form 
            onSubmit={handleSubmit}
            className="form-inline d-flex justify-content-center md-form form-sm"
            id="search-form"
            >
              <input
              className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search city..."
                aria-label="Search"
                autoComplete="off"
                id="search_bar"
                onChange={handleCityChange}
              />
                <button type="submit" id="search_icon">
                  <i className="fas fa-search"></i>
                </button>
            </form>
            <hr />
<WeatherInfo data={weatherData}/> 
<br/> 
<WeatherForecast city={weatherData.city} /> 
</div>
<small className="small">
Coded by <a href="https://www.instagram.com/_andreacodes/" target="_blank" rel="noreferrer"> Andrea Dubuc </a> and is open source on {" "}

      <a href="https://github.com/AndreaDubuc/my-react-app"
      target="_blank" rel="noreferrer">
         GitHub
        </a>
2022

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
        