import { useCallback, useEffect, useState } from "react";

interface Weather {
  city: string;
}

const Weather: React.FC<Weather> = ({ city }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = useCallback(async () => {
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

  console.log(weather);
  return <div>{city}</div>;
};

export default Weather;
