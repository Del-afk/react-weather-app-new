import React, { useEffect, useState } from "react";
import "./Forcast.css";
import axios from "axios";

export default function forcast(props) {
  if (!props.data) {
    return "";
  }

  let [daily, setDaily] = useState(false);
  let [d, setD] = useState(false);

  let lat = props.data.coord.lat;
  let lon = props.data.coord.lon;

  const callAPi = () => {
    setD(props.data);
    let apiKey = "6780fa37f0ac99e81647c060669cc6d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForcast);
  };

  if (d != props.data && d != false) {
    callAPi();
  }

  useEffect(callAPi, []);

  function handleForcast(response) {
    setDaily(response.data.daily);
  }

  function weekDay(dateTime) {
    let milliseconds = dateTime * 1000;
    let dateObject = new Date(milliseconds);
    return dateObject.toLocaleString("en-US", { weekday: "long" });
  }
  // ------------------icon pic part -------------------------
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

  if (daily) {
    console.log(daily);
    return (
      <div className="weatherforcast">
        {daily.map(function (weekDays, index) {
          if (index < 6) {
            return (
              <div id="fday0" className="forcastday">
                <img
                  className="forcastback"
                  src="/forcastbackground.svg"
                  alt=""
                />
                <img
                  id="icon_d0"
                  className="overweather"
                  src={changeImage(weekDays.weather[0].icon)}
                  alt=""
                />
                <p id="degree_d0" className="forcastdegree">
                  {Math.round(weekDays.temp.day)} °C
                </p>
                <h3 id="humidity_d0" className="forcasthumidity">
                  humidity:{Math.round(weekDays.humidity)}%
                </h3>
                <h3 id="windspeed_d0" className="forcastwindspeed">
                  W/S : {Math.round(weekDays.wind_speed)} km/h
                </h3>
                <h3 id="status_d0" className="forcaststatus">
                  {weekDays.weather[0].description}
                </h3>
                <p id="name_d0" className="forcastdayname">
                  {weekDay(weekDays.dt)}
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return "";
  }
}
