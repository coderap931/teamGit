import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nasa from './components/Nasa'
import WeatherApp from './weather/Weather';

function App() {
  return (
    <div className="App">
      <Nasa/>
      <WeatherApp />
    </div>
  );
}

export default App;