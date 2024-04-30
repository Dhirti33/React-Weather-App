import { useState } from "react";

import "../styles/weatherPage.css";
import Header from "./Header";
import Weather from "./Weather";
import AirQuality from "./airQuality";
import CountryWeatherInfo from "./CountryWeatherInfo";
import TodayTemp from "./todayTemp";
import TomorrowTemp from "./tomorrowTemp";

const WeatherPage = ({onSignOut}) => {
//   const [country, setCountry] = useState("Ghana");
  const [tempT, setTempT] = useState();
  const [condition, setCondition] = useState();
  const [pressure, setPressure] = useState();
  const [humidity, setHumidity] = useState();
  const [visibility, setVisibility] = useState();

  const [speed, setSpeed] = useState();
  const [direction, setDirection] = useState();

  const [icon, setIcon] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [count, setCount] = useState();


  const tempChange = (temp) => {
    setTempT(temp);
  };

  const conditionChange = (condition) => {
    setCondition(condition);
  };
  const pressureChange = (pressure) => {
    setPressure(pressure);
  };
  const humidityChange = (humidity) => {
    setHumidity(humidity);
  };
  const visibilityChange = (visibility) => {
    setVisibility(visibility);
  };

  //
  const speedChange = (speed) => {
    setSpeed(speed);
  };
  const directionChange = (direction) => {
    setDirection(direction);
  };

  //
  const iconChange = (icon) => {
    setIcon(icon);
  };
  const cityChange = (city) => {
    setCity(city);
  };
  const regionChange = (region) => {
    setRegion(region);
  };
  const countChange = (count) => {
    setCount(count);
  };

  const [display,setDisplay] = useState(true)

  const displayPage =(loginStatus) =>{
    setDisplay(loginStatus)
    onSignOut(display)
  }

  // // Fetch Api

  return (
    <main className="WeatherContainer">
      <div className="container">
        <header className="user">
          <Header
            onTemp={tempChange}
            onCondition={conditionChange}
            onPressure={pressureChange}
            onHumidity={humidityChange}
            onVisibility={visibilityChange}
            onSpeed={speedChange}
            onDirection={directionChange}
            onIcon={iconChange}
            onCity={cityChange}
            onRegion={regionChange}
            onCount={countChange}
            onLogin={displayPage}
          />
        </header>
        <section className="weatherAir">
          <Weather
            temp={tempT}
            condition={condition}
            pressure={pressure}
            humidity={humidity}
            visibility={visibility}
          />
          <AirQuality speed={speed} direction={direction} />
        </section>
        <section className="todayTomorrowTemp">
          <TodayTemp icon={icon} />
          <TomorrowTemp />
        </section>
      </div>
      <div className="side">
        <CountryWeatherInfo city={city} region={region} country={count} />
      </div>
    </main>
  );
};

export default WeatherPage;
