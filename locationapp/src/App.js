import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nasa from './components/Nasa'
import WeatherApp from './weather/Weather';
import Ticketmaster from './ticketmaster/Ticketmaster';

function App() {
  return (
    <div className="App">
      <Nasa/>
      <WeatherApp />
      <Ticketmaster />
    </div>
  );
}

export default App;