import React, { useState } from "react";

import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="col">
        <div className="row">
          <div className="col d-flex flex-row justify-content-end">
            <h1 id="temperature">{Math.round(props.celsius)}</h1>

            <div className="units my-auto">
              <span className="C active" id="celsius-link">
                °C
              </span>{" "}
              |
              <a
                href="/"
                onClick={showFahrenheit}
                className="F unactive"
                id="fahrenheit-link"
              >
                °F
              </a>
              {" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <WeatherIcon code={props.data} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col">
        <div className="row">
          <div className="col d-flex flex-row justify-content-end">
            <h1>
              <span id="temperature">{Math.round(fahrenheit())}</span>
            </h1>

            <div className="units my-auto">
              <a href="/" onClick={showCelsius} className="C unactive" id="celsius-link">
                °C
              </a>{" "}
              |
              <span className="F active" id="fahrenheit-link">
                °F
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <WeatherIcon code={props.data} />
          </div>
        </div>
      </div>
    );
  }
}