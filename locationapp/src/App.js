import Nasa from './components/Nasa'
import './App.css'
import { useState, useEffect } from 'react';


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
    </div>
  );
}

export default App;
