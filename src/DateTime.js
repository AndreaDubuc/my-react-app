import React from "react";
export default function DateTime(props){
 
    let days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    let months = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let today = props.currentDate.getDate();
    let day = days[props.currentDate.getDay()];
    let month = months[props.currentDate.getMonth()];
    let year = props.currentDate.getFullYear();
    let hour = props.currentDate.getHours();
    if(hour < 10){
      hour = `0${hour}`
    };
    let minutes = props.currentDate.getMinutes();
    if(minutes < 10){
      minutes = `0${minutes}`
    };
    function dateOrdinal() {
    if (today === 1 || today === 21 || today === 31) {
      return today + `st`;
    } else if (today === 2 || today === 22) {
      return today + `nd`;
    } else if (today === 3 || today=== 23) {
      return today + `rd`;
    } else {
      return today + `th`;
    }
  }
  let currentDateTime = `${day}, ${dateOrdinal(today)} ${month}, ${year} ${hour}:${minutes}`
    return (
    <div>
      <p>{currentDateTime}</p>
    </div>
  );
}


