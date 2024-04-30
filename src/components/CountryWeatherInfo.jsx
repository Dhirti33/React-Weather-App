import "../styles/CountryWeatherInfo.css";

const CountryWeatherInfo = ({city,region,country}) => {
  return (
    <div className="countryWeatherInfoContainer">
      <div className="country">
        <div className="countryLeft">
          <p className="cityCountry">{city}, {region}</p>
        </div>
        <div className="countryDegree">22&deg;C</div>
      </div>
      <div className="countText">
        Welcome to my weather App
        <br />
        <br />
        Enter a location in the search box to knw the its current weather
      </div>
      <div className="countrySunriseSunset"></div>
    </div>
  );
};

export default CountryWeatherInfo;
