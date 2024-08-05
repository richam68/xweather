import React, { useState } from "react";
import Card from "./card";
import "./style.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const weatherApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=b2f564921ce7443b89f175444232708&q=${search}`
      );
      const responseData = await response.json();
      console.log("response", responseData);
      setWeatherData(responseData);
    } catch (err) {
      console.log("err", err);
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  console.log(search, "search");
  console.log("weatherData", weatherData);

  return (
    <div>
      <input
        type="text"
        name="search"
        className="searchbar"
        placeholder="Enter city name"
        value={search}
        onChange={handleSearch}
      />
      <button className="button" onClick={weatherApi}>
        Search
      </button>

      {loading && <p>Loading data...</p>}

      {!loading && weatherData && (
        <div className="weather-cards">
          <Card
            heading="Temperature"
            data={`${weatherData.current.humidity}°C`}
          />
          <Card heading="Humidity" data={`${weatherData.current.temp_c}%`} />
          <Card heading="Condition" data={weatherData.current.condition.text} />
          <Card heading="Wind" data={`${weatherData.current.wind_kph}kph`} />
        </div>
      )}
    </div>
  );
};

export default Weather;
