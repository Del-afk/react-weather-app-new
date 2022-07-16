import React, { useEffect, useState } from "react";
import "./styles.css";
import "./searchbar";
import Searchbar from "./searchbar";
import TodayPart from "./today-part";
import Forcast from "./Forcast";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("Amsterdam");
  let [data , setData] = useState(false);

  function handleData(response) {
    let data = response.data;
    data.main.temp = Math.round(data.main.temp)
    data.main.tempFa = Math.round((data.main.temp * 9) / 5) + 32;
    console.log(data)
    setData(data);
  }

  function callAPi() {
    let apiKey = "eef545a795cae9fca6e032ee8406884a";
    let cityName = city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);
  }

useEffect(callAPi,[]);

  return (
    <div className="App">
      <Searchbar city={city} setCity={setCity} submit={callAPi} />
      <TodayPart data={data} />      
      <Forcast data={data} />
    </div>
  );
}
