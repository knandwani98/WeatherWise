import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Header({ weatherData, handleReset }) {
  return (
    <header className="header">
      <div className="pi-2 pb-1 f-left">
        {weatherData && (
          <span onClick={handleReset} className="icon link">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        )}
        <h1>Weather App</h1>
      </div>
    </header>
  );
}
