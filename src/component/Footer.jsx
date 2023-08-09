import {
  faDroplet,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer({ weatherData }) {
  return (
    <footer className="weather-footer  grid col-2">
      <div className="block f-center pb-1">
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faTemperatureHigh} />
          </span>
        </div>
        <div className="feels-like">
          <p>
            <strong>{Math.round(weatherData.main.feels_like)}</strong>℃
          </p>
          <small>Feels like</small>
        </div>
      </div>

      <div className="block f-center pb-1">
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faDroplet} />
          </span>
        </div>
        <div className="humidity">
          <p>
            <strong>{Math.round(weatherData.main.humidity)}</strong>%
          </p>
          <small>Humidity</small>
        </div>
      </div>
    </footer>
  );
}
