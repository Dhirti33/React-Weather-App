import { useEffect, useState } from 'react';
import "../styles/CountryWeatherInfo.css"

// import './App.css'; // Import your CSS file

const DayNightAnimation = () => {
  const [sunPosition, setSunPosition] = useState({ x: 0, y: 0 });
  const [moonPosition, setMoonPosition] = useState({ x: 0, y: 0 });
  const [isDay, setIsDay] = useState(true);

  const container = document.querySelector('.sunriseSunsetDiagram');
  

  useEffect(() => {
    const updatePosition = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Calculate the angle based on the time of the day
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      const sunAngle = (totalSeconds / 86400) * 360; // 86400 seconds in a day
      const moonAngle = sunAngle + 180; // Moon is opposite to the sun

      // Calculate the position on the circular path
      const radius = 150; // Adjust the radius as needed
      const sunX = Math.cos((sunAngle * Math.PI) / 180) * radius + 200; // Center X at 200
      const sunY = Math.sin((sunAngle * Math.PI) / 180) * radius + 200; // Center Y at 200
      const moonX = Math.cos((moonAngle * Math.PI) / 180) * radius + 200; // Center X at 200
      const moonY = Math.sin((moonAngle * Math.PI) / 180) * radius + 200; // Center Y at 200
      console.log(container.clientWidth)
      // Update the sun and moon positions
      setSunPosition({ x: sunX, y: sunY });
      setMoonPosition({ x: moonX, y: moonY });
    };

    const updateVisibility = () => {
      const now = new Date();
      const hours = now.getHours();

      // Determine day/night based on hours
      setIsDay(hours >= 6 && hours < 18);
    };

    const updateAnimation = () => {
      updatePosition();
      updateVisibility();
      requestAnimationFrame(updateAnimation);
    };

    // Start the animation loop
    updateAnimation();

    // Clean up the interval on component unmount
    return () => cancelAnimationFrame(updateAnimation);
  }, []);

  return (
    // <div className="container">
    //   <div className={`sun ${isDay ? 'visible' : 'hidden'}`} style={{ left: sunPosition.x, top: sunPosition.y }}></div>
    //   <div className={`moon ${isDay ? 'hidden' : 'visible'}`} style={{ left: moonPosition.x, top: moonPosition.y }}></div>
    // </div>
    <div className="sunriseSunsetDiagram">
        <div className={`moon ${isDay ? 'hidden' : 'visible'}`} style={{ left: moonPosition.x, top: moonPosition.y }}>
            <svg width="2em" height="2em" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fbb041" d="M62.713 30.827L50.77 27.352a21.201 21.201 0 0 0-2.311-5.603c1.987-3.641 3.977-7.282 5.967-10.922c.544-.996-.541-2.086-1.539-1.538l-10.878 5.974a20.853 20.853 0 0 0-5.673-2.362c-1.183-4.03-2.365-8.06-3.548-12.1c-.313-1.071-1.853-1.075-2.168 0c-1.173 4.04-2.349 8.07-3.524 12.11a21.116 21.116 0 0 0-5.576 2.316c-3.666-2-7.333-4.01-10.999-6.01c-.994-.543-2.085.543-1.537 1.541l6.03 10.978a21.063 21.063 0 0 0-2.324 5.634L.805 30.854c-1.07.314-1.076 1.856 0 2.168l11.889 3.459a21.248 21.248 0 0 0 2.389 5.729c-1.978 3.618-3.956 7.235-5.932 10.854c-.546.996.539 2.087 1.537 1.54c3.613-1.985 7.227-3.97 10.841-5.953a21.062 21.062 0 0 0 5.636 2.332c1.159 3.964 2.322 7.924 3.483 11.883c.315 1.074 1.856 1.076 2.168 0c1.151-3.955 2.305-7.911 3.454-11.867a21.115 21.115 0 0 0 5.697-2.353l10.774 5.888a.95.95 0 0 0 .739.211c.272-.016.514-.141.702-.325c.208-.192.35-.451.367-.745a.962.962 0 0 0-.218-.743c-1.966-3.583-3.937-7.169-5.904-10.754a21.294 21.294 0 0 0 2.338-5.679c3.98-1.168 7.966-2.336 11.947-3.502c1.073-.314 1.077-1.857.002-2.17"></path>
                <circle cx="31.553" cy="31.836" r="17.901" fill="#f9ec21"></circle>
            </svg>
        </div>
    </div>
  );
};

export default DayNightAnimation;
