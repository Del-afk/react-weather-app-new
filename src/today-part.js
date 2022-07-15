import React, { useState } from "react";
import "./today-part.css";

export default function TodayPart(props) {
  let [tab, setTab] = useState(0);
  if (!props.data) {
    return "";
  }
  const tabHandler = () => {
    setTab(0);
  };
  const tabHandlerFa = () => {
    setTab(1);
  };

  return (
    <div className="detail">
      <h1 id="cityname" className="cityname">
        {props.data.name}
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
          {tab == 0 ? props.data.main.temp : props.data.main.tempFa}
        </li>
        <li id="celfar">
          <i id="cel" onClick={tabHandler}>
            °C
          </i>{" "}
          |{" "}
          <i id="far" onClick={tabHandlerFa}>
            °F
          </i>
        </li>
        <li id="weatherstatus" className="weatherstatus">
          {props.data.weather[0].description}
        </li>
        <li id="windspeed" className="windspeed">
          Wind Speed: {Math.round(props.data.wind.speed)}km/h
        </li>
        <li id="humidity" className="humidity">
          Humidity : {Math.round(props.data.main.humidity)}%
        </li>
      </ul>
    </div>
  );
}
