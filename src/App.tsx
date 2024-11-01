import { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("New York");

  return (
    <>
      <h1>React Weather</h1>
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
      <Weather city={city}/>
    </>
  );
}

export default App;
