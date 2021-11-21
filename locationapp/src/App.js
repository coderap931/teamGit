import React,{ useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nasa from './components/Nasa'
import WeatherApp from './weather/Weather';

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [image, setImage] = useState('');


  function gettingLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude)
      setLongitude(pos.coords.longitude)
      console.log(latitude);
    });


  }

  useEffect(() => {
    gettingLocation();
  }, []);


  return (
    <div className="App">
      <Nasa latitude={latitude} longitude={longitude} />
      <WeatherApp />
    </div>
  );
}

export default App;