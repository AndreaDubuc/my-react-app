import React from "react";
import "./CurrentTime.css";

function CurrentTime(props){
 const now= new Date();
 let hours =now.getHours();
 if (hours < 10){
   hours= `0${hours}`;
 }
 let minutes =now.getMinutes();
 if (minutes <10){
   minutes= `0${minutes}`;
 }

 return(
   <div className="CurrentTime">
     <small id="time">
       {hours}:{minutes}
     </small>
   </div>
 );
}

