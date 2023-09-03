
import './App.css';
import React, { useState } from 'react';
requestAnimationFrame('dotenv').config();

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    const apiKey = process.env.apiKey;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try{
      const Response = await fetch(url);
      const data = await Response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Weathertitle">
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter City" onChange={(event) => setCity(event.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°K</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
  
}

export default App;
