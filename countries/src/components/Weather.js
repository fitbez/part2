import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
console.log(API_KEY);
console.log("fitsum");
const Weather = ({ countryToShow }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    console.log("Effect");
    let params;
    countryToShow === 1
      ? (params = {
          access_key: API_KEY,
          query: countryToShow
        })
      : (params = {
          access_key: API_KEY,
          query: countryToShow
        });
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then(response => {
        console.log("weather fulfilled");
        setWeather(response.data);
      });
  }, [countryToShow]);
  console.log(weather);
  const temperature =
    weather && weather.current ? weather.current.temperature : null;
  const icon =
    weather && weather.current ? weather.current.weather_icons : null;
  const wind = weather && weather.current ? weather.current.wind_speed : null;
  const direction =
    weather && weather.current ? weather.current.wind_dir : null;
  return (
    <div>
      {" "}
      <p>
        <strong>temperature:</strong>
        {temperature} Celsius
      </p>
      <div>
        <img src={icon} alt="weather icon" />
      </div>
      <p>
        <strong>wind:</strong>
        {wind} kph direction {direction}
      </p>
    </div>
  );
};

export default Weather;
