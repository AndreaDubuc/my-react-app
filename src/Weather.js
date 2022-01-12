import React from "react";
import "./Weather.css";

export default function Weather (){
    return(
        <div className="Weather">
            <form>
                <div className="row">
<div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                className="form-search"
                />
</div>
<div className="col=3">
                <input type="submit" value="search" className="btn btn-primary"/>
</div>
</div>
            </form>
            <h1> Seoul </h1>
            <ul>
                <li>Wednesday 09:00</li> 
                <li> Mostly Cloudy</li>
                </ul>
<div className="row"> 
<div className="col-6">
<img className="Mainicon"
src="https://www.kindpng.com/picc/m/209-2091974_partly-cloudy-clipart-image-with-rain-transparent-png.png" alt="Mostly Cloudy"/>
6°C
</div>
<div className="col-6">
<ul>
<li>
Precipitation: 15%
</li>
<li>
Humidity:72%
</li>
<li>
    Wind:13 km/h
</li>

</ul>

</div>

</div>






            </div>
    )
}