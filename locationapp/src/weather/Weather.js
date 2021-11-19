import React from 'react';
// import Locator from '../location/Locator';

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const key = '1418d490cfa97da9ad8105841ae8b1a0';

const WeatherApp = () => {
    const unit = 'imperial';
    const Locator = () => {
        const LocationGetter = (pos) => {
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;
            // let location = [latitude, longitude];
            // // !! REMOVE THIS LATER
            // console.log(location);
            // console.log('Dont forget to remove these console logs');
        }
        navigator.geolocation.getCurrentPosition(LocationGetter);
    }

    const setWeatherResults = (json) => {
        Locator();
        console.log(json);
    };

    const toggleUnits = () => {
        let currentUnit = unit;
        if(currentUnit === 'imperial'){
            currentUnit = 'metric';
        } else if (currentUnit === 'metric'){
            currentUnit = 'imperial';
        } else {
            console.log('You broke it! (Your currentUnit isnt a recognized type!)')
        }
    }

    const fetchWeather = () => {
        Locator();
        let url = `${baseURL}?lat=${latitude}&lon=${longitude}&units=${unit}&appid${key}`;
        fetch(url)
            .then(res => res.json())
            .then(json => setWeatherResults(json))
            .catch(err => console.log(err));
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div onLoad={fetchWeather()}>
                    
                </div>
                <button className='unitButton' value='imperial' onClick={toggleUnits()}>Change Unit of Measurement</button>
            </div>
        </div>
    )
}

export default WeatherApp;