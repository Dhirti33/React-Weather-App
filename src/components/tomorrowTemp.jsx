import "../styles/tomorrowTemp.css"

const TomorrowTemp = () => {

    return (
        <div className="tomorrowTempContainer">
            <div className="White"></div>
            <div className="topC">
                <p>Tomorrow</p>
                <p className="tip">Take an umbrella</p>
            </div>
            <div className="bottomC">
                <p className="tomorrowTempDegree">20&deg;C</p>
                <p className="tomorrowWeatherCondition">Rainny</p>
            </div>
        </div>
    )
}

export default TomorrowTemp;