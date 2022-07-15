import React, { useState } from "react"; 
import "./today-part.css";
import axios from "axios";

export default function TodayPart() {
  return (
    <div className="detail">
      <h1 id="cityname" className="cityname">
        Amsterdam
      </h1>
      <p id="realtime" className="realtime"></p>
      <img
        src="/sunny.svg"
        id="weathericon"
        className="weathericon"
        alt="weather icon"
      />
      <ul className="states">
        <li id="degree" className="degree">
          {" "}
          32
        </li>
        <li id="celfar">
          <i id="cel">°C</i> | <i id="far">°F</i>
        </li>
        <li id="weatherstatus" className="weatherstatus">
          light rain
        </li>
        <li id="windspeed" className="windspeed">
          Wind Speed: 0.17km/h
        </li>
        <li id="humidity" className="humidity">
          Humidity : 43%
        </li>
      </ul>
    </div>
  );
}
