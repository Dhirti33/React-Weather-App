import { useState } from 'react';
import './App.css';
import Login from "./components/Login"
// import Page from './components/Page';/
import WeatherPage from "./components/weatherPage"

function App() {
  const [display,setDisplay] = useState(true)

  const displayPage =(loginStatus) =>{
    setDisplay(loginStatus)
  }

  const signOut = (display) => {
    setDisplay(display)
  }
  return (
    <main className='app'>
      <div className="square" style={{"--i":0}}></div>
      <div className="square" style={{"--i":1}}></div>
      <div className="square" style={{"--i":2}}></div>
      <div className="square" style={{"--i":3}}></div>
      <div className="square" style={{"--i":4}}></div>
      {display ? (
        <WeatherPage onSignOut={signOut}/>
      ) : (
        <Login onLogin={displayPage} />
      )}
    </main>
  )
}

export default App
