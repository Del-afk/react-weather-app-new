import React from "react";
import "./Forcast.css";

export default function forcast(){
    return (
        <div className="weatherforcast">
          <div id="fday0" className="forcastday">
            <img className="forcastback" src="/forcastbackground.svg" alt="" />
            <img id="icon_d0" className="overweather" src="/cloud.svg" alt="" />
            <p id="degree_d0" className="forcastdegree"></p>
            <h3 id="humidity_d0" className="forcasthumidity"></h3>
            <h3 id="windspeed_d0" className="forcastwindspeed"></h3>
            <h3 id="status_d0" className="forcaststatus"></h3>
            <p id="name_d0" className="forcastdayname">sat</p>
          </div>
          <div id="fday1" className="forcastday">
            <img className="forcastback" src="/forcastbackground.svg" alt="" />
            <img id="icon_d1" className="overweather" src="/cloud.svg" alt="" />
            <p id="degree_d1" className="forcastdegree"></p>
            <h3 id="humidity_d1" className="forcasthumidity"></h3>
            <h3 id="windspeed_d1" className="forcastwindspeed"></h3>
            <h3 id="status_d1" className="forcaststatus"></h3>
            <p id="name_d1" className="forcastdayname">sat</p>
          </div>
          <div id="fday2" className="forcastday">
            <img className="forcastback" src="/forcastbackground.svg" alt="" />
            <img id="icon_d2" className="overweather" src="/cloud.svg" alt="" />
            <p id="degree_d2" className="forcastdegree"></p>
            <h3 id="humidity_d2" className="forcasthumidity"></h3>
            <h3 id="windspeed_d2" className="forcastwindspeed"></h3>
            <h3 id="status_d2" className="forcaststatus"></h3>
            <p id="name_d2" className="forcastdayname">sat</p>
          </div>
          <div id="fday3" className="forcastday">
            <img className="forcastback" src="/forcastbackground.svg" alt="" />
            <img id="icon_d3" className="overweather" src="/cloud.svg" alt="" />
            <p id="degree_d3" className="forcastdegree"></p>
            <h3 id="humidity_d3" className="forcasthumidity"></h3>
            <h3 id="windspeed_d3" className="forcastwindspeed"></h3>
            <h3 id="status_d3" className="forcaststatus"></h3>
            <p id="name_d3" className="forcastdayname">sat</p>
          </div>
          <div id="fday4" className="forcastday">
            <img className="forcastback" src="/forcastbackground.svg" alt="" />
            <img id="icon_d4" className="overweather" src="/cloud.svg" alt="" />
            <p id="degree_d4" className="forcastdegree"></p>
            <h3 id="humidity_d4" className="forcasthumidity"></h3>
            <h3 id="windspeed_d4" className="forcastwindspeed"></h3>
            <h3 id="status_d4" className="forcaststatus"></h3>
            <p id="name_d4" className="forcastdayname">sat</p>
          </div>
          <div id="fday5" className="forcastday">
            <img className="forcastback" src="/forcastbackground.svg" alt="" />
            <img id="icon_d5" className="overweather" src="/cloud.svg" alt="" />
            <p id="degree_d5" className="forcastdegree"></p>
            <h3 id="humidity_d5" className="forcasthumidity"></h3>
            <h3 id="windspeed_d5" className="forcastwindspeed"></h3>
            <h3 id="status_d5" className="forcaststatus"></h3>
            <p id="name_d5" className="forcastdayname">sat</p>
          </div>
        </div>
    )
}