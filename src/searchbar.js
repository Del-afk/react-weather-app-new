import React, { useState } from "react";
import axios from "axios";
import "./searchbar.css";

export default function Searchbar() {
  let [city, setCity] = useState("");
  let apiKey = "eef545a795cae9fca6e032ee8406884a";
  let cityName = "new york";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);

  function handleSubmit(response) {
    console.log(response.data);
  }
  function ChangeCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 searchholder">
        <input
          type="search"
          className="form-control"
          placeholder="search city here..."
          aria-label="search city here..."
          aria-describedby="button-addon2"
          id="searchinput"
          autoComplete="off"
          onChange={ChangeCity}
        />
        <button
          className="btn btn-outline-secondary searchbutton"
          type="button"
          id="button-addon2"
        >
          <img className="searchicon" src="/icons8-search.svg" alt="" />
        </button>
      </div>
    </form>
  );
}
