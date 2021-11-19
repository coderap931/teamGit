import React, {useState} from 'react';

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const key = '9c42415c7e6fb5d790e4c22bf267c476';

const WeatherApp = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    let unit = 'imperial';

    const LocationGetter = (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
    }

    const setWeatherResults = (json) => {
        console.log(json);
    };

    const fetchWeather = () => {
        let url = `${baseURL}?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${key}`;
        fetch(url)
            .then(res => res.json())
            .then(json => setWeatherResults(json))
            .catch(err => console.log(err));
    }

    navigator.geolocation.getCurrentPosition(LocationGetter);

    const setUnit = () => {
        if(unit === 'imperial'){
            unit = 'metric';
            fetchWeather(unit);
            console.log('The metric system is great eh?');
        } else if (unit === 'metric'){
            unit = 'imperial';
            fetchWeather(unit);
            console.log('Heck yeah, freedom units');
        } else {
            console.log('What the heck kinda unit of measurement is that?!')
        }
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <button onClick={fetchWeather}>Get your local weather</button>
                <button onClick={setUnit}>Change Units of Measurement</button>
            </div>
        </div>
    )
}

export default WeatherApp;