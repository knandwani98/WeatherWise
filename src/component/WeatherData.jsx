import React from "react";
import "../styles/weatherdata.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function WeatherData({ weatherData }) {
  return (
    <>
      <div className="weather-data g-center">
        <div className="weather-mood">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt="weather img"
          />
        </div>
        <h2 id="temp">{Math.round(weatherData.main.temp)}℃</h2>
        <p id="status">{weatherData.weather[0].description}</p>
        <p id="location">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {weatherData.name}, {weatherData.sys.country}
        </p>
      </div>
    </>
  );
}
