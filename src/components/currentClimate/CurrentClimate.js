import "./CurrentClimate.css";

const CurrentClimate = ({ data }) => {
  return (
    <div className="weather">
      <img
        alt="weather"
        className="weather-icon"
        src={`icons/${data.weather[0].icon}.png`}
      />
      <p className="city">{data.city}</p>
      <p className="weather-content">{data.weather[0].description}</p>

      <p className="temperature">{Math.round(data.main.temp)}</p>

      <div className="weather-bottom">
        <span className="label">Feels like </span>
        <span
          className="value"
          style={{ fontWeight: "500", fontStyle: "normal" }}
        >
          {" "}
          {Math.round(data.main.feels_like)}°C
        </span>
      </div>
      <div className="weather-bottom">
        <span className="label">Humdity </span>
        <span
          className="value"
          style={{ fontWeight: "500", fontStyle: "normal" }}
        >
          {" "}
          {Math.round(data.main.humidity)}%
        </span>
      </div>
      <div className="weather-bottom">
        <span className="label">Wind </span>
        <span
          className="value"
          style={{ fontWeight: "500", fontStyle: "normal" }}
        >
          {" "}
          {Math.round(data.wind.speed)}m/s
        </span>
      </div>
      <div className="weather-bottom">
        <span className="label">Pressure </span>
        <span
          className="value"
          style={{ fontWeight: "500", fontStyle: "normal" }}
        >
          {" "}
          {Math.round(data.main.pressure)}Pa
        </span>
      </div>
    </div>
  );
};

export default CurrentClimate;
