import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WeekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayToday = new Date().getDay();
  const ForecastDays = WeekDays.slice(dayToday, WeekDays.length).concat(
    WeekDays.slice(0, dayToday)
  );

  return (
    <>
      <label className="forecastTitle">Daily</label>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div classname="everyday-item">
                    <img
                      alt="weather"
                      className="iconlist-small"
                      src={`/items/${item.weather[0].icon}.png`}
                    />

                    <label className="day">{ForecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="TempRange">
                      {Math.round(item.main.temp_min)}°C -{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-panel">
                  <div classname="daily-details-element">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>

                  <div classname="daily-details-element">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>

                  <div classname="daily-details-element">
                    <label>Clouds</label>
                    <label>{item.clouds.all}</label>
                  </div>

                  <div classname="daily-details-element">
                    <label>Wind</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>

                  <div classname="daily-details-element">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div classname="daily-details-element">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
