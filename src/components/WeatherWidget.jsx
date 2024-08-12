// src/WeatherWidget.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherWidget.css";
 // Import the CSS file

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "b9cf1129d22741fc4a939dde0458e1ac"; // Replace with your OpenWeatherMap API key
      const city = "Bengaluru";
    //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeather(response.data);
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div className="weather-widget">Error: {error}</div>;
  }

  if (!weather) {
    return <div className="weather-widget">Loading...</div>;
  }

  return (
    <div className="weather-widget">
      <h3>{weather.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather Icon"
        className="weather-icon"
      />
      <p className="temperature">{weather.main.temp}°C</p>
      <p className="weather-description">{weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherWidget;
