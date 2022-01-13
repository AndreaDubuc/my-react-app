import React from "react";
import "./Weather.css";

export default function Weather (){
    return(
        <div className="Weather">
            <div className="search-form">
            <div className="row">
             <form className="col-6">
               <input 
                type="text" 
                placeholder="Enter a city..."
                className="form-search"
                autoComplete="off"
                />  
         </form>
         <button className="magnifying-glass col-3">
             <i className=" fas fa-search-location"/>
         </button>
            </div>
            </div>  
            <div className="date-time"></div>
            <div className="current-weather">
<div className="row">
    <img
    src="img"
    className="main-icon"
    alt="current weather icon"/>
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
    alt="current weather icon"/>
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
    alt="current weather icon"/>
                
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


    
                 

                


