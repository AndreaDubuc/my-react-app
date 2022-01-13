import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
<div className="App">

  <div className="container"> 

      <h1> Weather App </h1>
      <Weather/>
<footer> Coded by <a href="https://www.instagram.com/_andreacodes/" target="_blank">  Andrea </a> and is open-source on {" "}

      <a href="https://github.com/AndreaDubuc/my-react-app"
      target="_blank">
         GitHub 2022
        </a>
        </footer>
        </div>
    </div>
  );
}


