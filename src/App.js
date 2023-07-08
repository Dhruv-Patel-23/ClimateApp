import Search from "./components/searchBar/Search";
import "./App.css";
import CurrentClimate from "./components/currentClimate/CurrentClimate";
import { Live_Weather_API_URL, Live_Weather_ApiKey } from "./Apifetch";
import { useState } from "react";
import Forecast from "./components/ForecastClimate/Forecast";
function App() {
  const [liveWeather, setLiveWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const onSearchChange = (data) => {
    const [latitude, longitude] = data.value.split(" ");
    const CurrentClimateFetch = fetch(
      `${Live_Weather_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${Live_Weather_ApiKey}&units=metric`
    );

    const ForecastFetch = fetch(
      `${Live_Weather_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${Live_Weather_ApiKey}&units=metric`
    );

    Promise.all([CurrentClimateFetch, ForecastFetch])
      .then(async (response) => {
        const LiveweatherResponse = await response[0].json();
        const ForecastweatherResponse = await response[1].json();

        setLiveWeather({ city: data.label, ...LiveweatherResponse });
        setForecastWeather({ city: data.label, ...ForecastweatherResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(liveWeather);
  console.log(forecastWeather);

  return (
    <div className="App">
      <div className="Scontainer">
        <Search onSearchChange={onSearchChange} />
      </div>
      <div className="Ccontainer">
        {liveWeather && <CurrentClimate data={liveWeather} />}
      </div>
      <div className="Fcontainer">
         {forecastWeather &&  <Forecast data={forecastWeather}/>}
        
      </div>
    </div>
  );
}

export default App;
