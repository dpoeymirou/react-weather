import { useCallback, useEffect, useState } from "react";

interface Weather {
  city: string;
}

const Weather: React.FC<Weather> = ({ city }) => {
  const [weather, setWeather] = useState<{
    location: unknown;
    current: unknown;
  } | null>(null);

  const fetchWeather = useCallback(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=631739dab5ec412d981212424240111&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const icon: string | null =
    weather && `https://${weather.current!.condition.icon.substring(2)}`;
  const text = weather && weather.current!.condition.text;
  const location = weather && new Date(weather.location!.localtime);
  return (
    <div className="weather-results">
      <img src={icon!} alt="weather-icon" height={100} />
      <h2>{text}</h2>
      {/* <p>{location}</p> */}
    </div>
  );
};

export default Weather;
