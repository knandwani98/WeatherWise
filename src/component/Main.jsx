import React, { useEffect, useState } from "react";
import Form from "./Form";
import Loader from "./Loader";
import WeatherData from "./WeatherData";
import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [coords, setCoords] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  const handleChange = ({ target }) => {
    setInputText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputText);
    setIsLoading(true);
  };

  const handleReset = () => {
    setCity("");
    setWeatherData(null);
    setInputText("");
    setErrorMsg("");
  };

  const fetchWeather = (url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Invalid City Name");
        }
        return res.json();
      })

      .then((json) => {
        setWeatherData(json);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`;

      fetchWeather(url);
    }
  }, [city]);

  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`;

      fetchWeather(url);
    }
  }, [coords]);

  if (isLoading) return <Loader />;

  return (
    <div className="dialog">
      <Header weatherData={weatherData} handleReset={handleReset} />

      <main className="main p-2">
        {weatherData ? (
          <WeatherData weatherData={weatherData} />
        ) : (
          <Form
            getLocation={getLocation}
            errorMsg={errorMsg}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            inputText={inputText}
          />
        )}
      </main>

      {weatherData && <Footer weatherData={weatherData} />}
    </div>
  );
}
