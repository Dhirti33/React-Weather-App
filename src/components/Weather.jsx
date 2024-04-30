import "../styles/Weather.css"

const Weather =({temp,condition,pressure,humidity,visibility})=> {

    return (
        <div className="weatherContainer">
            <div className="White"></div>
            <div className="top">
                <div className="weatherIcon">
                    <svg width="2em" height="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path fill="none" stroke="tomato" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.657 18C4.085 18 2 15.993 2 13.517c0-2.475 2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773c1.88-.572 3.956-.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927-1.551 3.487-3.465 3.487H6.657"></path>
                    </svg>
                </div>
                <div className="whatsContainer">
                    <p className="weatherTT">Weather</p>
                    <p>What&apos;s the weather today</p>
                </div>
            </div>
            <div className="middle">
                <div className="weatherDegree">{temp}&deg;C</div>
                <div className="weatherCondition">{condition}</div>
            </div>
            <div className="Bottom">
                <div className="pressure div">
                    <p className="TT">Pressure</p>
                    <p className="pressureUnit unit">{pressure} mb</p>
                </div>
                <div className="visibility div">
                    <p className="TT">Visibility</p>
                    <p className="visibilityUnit unit">{visibility} km</p>
                </div>
                <div className="humidity div">
                    <p className="TT">Humidity</p>
                    <p className="humidityUnit unit">{humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;