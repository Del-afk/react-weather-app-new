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

  function changeImage(icon) {
    let imageUrl = "/sunny.svg";
    if (icon == "01d") {
      imageUrl = "/sunny.svg";
    } else if (icon == "02d") {
      imageUrl = "/sunny mid cloudy.svg";
    } else if (icon == "03d") {
      imageUrl = "/cloud.svg";
    } else if (icon == "04d") {
      imageUrl = "/cloud.svg";
    } else if (icon == "09d") {
      imageUrl = "/sun cloud mid rain.svg";
    } else if (icon == "10d") {
      imageUrl = "/sun cloud little rain.svg";
    } else if (icon == "11d") {
      imageUrl = "/cloud 3 zap.svg";
    } else if (icon == "13d") {
      imageUrl = "/big snow.svg";
    } else if (icon == "50d") {
      imageUrl = "/mid snow fastwind.svg";
    } else if (icon == "01n") {
      imageUrl = "/clearmoon.svg";
    } else if (icon == "02n") {
      imageUrl = "/moon cloud fast wind.svg";
    } else if (icon == "03n") {
      imageUrl = "/nightcloud.svg";
    } else if (icon == "04n") {
      imageUrl = "/nightcloud.svg";
    } else if (icon == "09n") {
      imageUrl = "/moon cloud mid rain.svg";
    } else if (icon == "10n") {
      imageUrl = "/night rain.svg";
    } else if (icon == "11n") {
      imageUrl = "/night zap.svg";
    } else if (icon == "13n") {
      imageUrl = "/nightsnow.svg";
    } else if (icon == "50n") {
      imageUrl = "/nightmist.svg";
    }
    return imageUrl;
  }

  return (
    <div className="detail">
      <h1 id="cityname" className="cityname">
        {props.data.name}
      </h1>
      <p id="realtime" className="realtime"></p>
      <img
        src={changeImage(props.data.weather[0].icon)}
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
