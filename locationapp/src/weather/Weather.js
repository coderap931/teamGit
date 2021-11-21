import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const key = '9c42415c7e6fb5d790e4c22bf267c476';

const WeatherApp = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    let unit = 'imperial';
    // let displayUnit = 'F';


    const setWeatherResults = (json) => {
        console.log(json);
    };

    const success = (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
    }

    const error = (posErr) => {
        console.warn(`ERROR(${posErr.code}): ${posErr.message}`);
    }

    const fetchWeather = () => {
        let url = `${baseURL}?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${key}`;
        fetch(url)
            .then(res => res.json())
            .then(json => setWeatherResults(json))
            .catch(err => console.log(err));
    }

    const setUnit = () => {
        if(unit === 'imperial'){
            unit = 'metric';
            // displayUnit = 'C';
            fetchWeather();
            console.log('The metric system is great eh?');
        } else if (unit === 'metric'){
            unit = 'imperial';
            // displayUnit = 'F';
            fetchWeather();
            console.log('Heck yeah, freedom units');
        } else {
            console.log('What the heck kinda unit of measurement is that?!')
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => success(pos), (posErr) => error(posErr));
        if(longitude !== ''){
            fetchWeather();
        }
    })


    return(
        <div className='main'>
            <div className='mainDiv'>
                <div className='outer'>
                    <Button onClick={setUnit}>Change Units of Measurement</Button>
                    </div>
                </div>
            </div>
    )
}

export default WeatherApp;