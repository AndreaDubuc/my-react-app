import React from "react";

export default function WeatherDescription(props){
    if(props.unit==="celsius"){
        return(
            <div className="WeatherDescription">
                <div className="row">
                        <div className="col-3 max-min deg"><strong>{props.tempMax}°/{props.tempMin}°</strong></div>
                        <div className="col-2 feels-like deg"><strong>{props.feelsLike}°</strong></div>
                        <div className="col-3 humidity deg"><strong>{props.humidity}%</strong></div>
                        <div className="col-4 wind deg"><strong>{props.wind} km/h</strong></div>
                </div>
                <div className="row">
                        <div className="col-3">Max-Min</div>
                        <div className="col-2">Feels like</div>
                        <div className="col-3">Humidity</div>
                        <div className="col-4">Wind</div>
                </div>
            </div>    
        );
   } else{
        let tempMaxFahr= Math.round((props.tempMax*9)/ 5 + 32);
        let tempMinFahr= Math.round((props.tempMin*9)/ 5 + 32);
        let feelsLikeFahr= Math.round((props.tempMax*9)/ 5 + 32);
        return(
            <div className="WeatherDescription">
                <div className="row">
                        <div className="col-3 max-min deg"><strong>{tempMaxFahr}°/{tempMinFahr}°</strong></div>
                        <div className="col-2 feels-like deg"><strong>{feelsLikeFahr}°</strong></div>
                        <div className="col-3 humidity deg"><strong>{props.humidity}%</strong></div>
                        <div className="col-4 wind deg"><strong>{props.wind} km/h</strong></div>
                </div>
                <div className="row">
                        <div className="col-3">Max-Min</div>
                        <div className="col-2">Feels like</div>
                        <div className="col-3">Humidity</div>
                        <div className="col-4">Wind</div>
                </div>
            </div>   

        );
    }    
}