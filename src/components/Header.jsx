import { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = (props) => {
  // const [country,setCountry] = useState("Ghana");
  const [country, setCountry] = useState("Ghana");
 
  const onSearch = (e) => {
    const search = e.target.value;
    setCountry(search);
    // Country = search;
    // props.onCountryChange(search);
  };
  console.log(country)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=7476653691be43178d781117232407&q=${country}`
        );
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
  
        // Call the props functions inside the useEffect block
        props.onTemp(responseData.current.temp_c);
        props.onCondition(responseData.current.condition.text);
        props.onPressure(responseData.current.pressure_mb);
        props.onHumidity(responseData.current.humidity);
        props.onVisibility(responseData.current.vis_km);
        props.onSpeed(responseData.current.wind_kph);
        props.onDirection(responseData.current.wind_dir);
        props.onIcon(responseData.current.condition.icon);
        props.onCity(responseData.location.name);
        props.onRegion(responseData.location.region);
        // props.onCount(responseData.current.location.country);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [country, props]);

  const LogOut = () => {
    props.onLogin(false)
  }
  

  return (
    <nav className="navBar">
      <div className="Left">
        <div className="logo"></div>
        <div className="user">
          <div className="userName">
            <p className="hello">Hello,</p>
            <h2 className="name">Lomoko Desmond</h2>
          </div>
        </div>
      </div>
      <div className="Right">
        <div className="searchBar">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onInput={onSearch}
          />
          <div className="searchLogo">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="M0 0h24v24H0z"></path>
                <path
                  fill="#003235"
                  d="M10.5 2a8.5 8.5 0 0 1 6.676 13.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2Zm0 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13Zm0 1a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="SignOut" onClick={LogOut}>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#003235"
              d="M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5Zm-1 .582V15.92L4 15V4.999l6-.917ZM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5ZM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1Z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
