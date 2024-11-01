import { useState } from "react";
import Weather from "./Weather";

const WeatherSelect: React.FC = () => {
  const [city, setCity] = useState("New York");

  return (
    <>
      <div className="weather-select">
        <label htmlFor="location-select">Pick a city:</label>
        <select
          name="location"
          id="location-select"
          onChange={(e) => setCity(e.target.value)}
        >
          <option disabled value="">
            Select a city
          </option>
          <option value="New York">New York</option>
          <option value="Paris">Paris</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Honk Kong">Honk Kong</option>
          <option value="Sydney">Sydney</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
      <Weather city={city} />
    </>
  );
};

export default WeatherSelect;
