import React, {useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';
import {WiCelsius, WiFahrenheit} from 'react-icons/wi'

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const key = '76d1fa4b8a01de7c08aedbe43eee5eb7';

const WeatherApp = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [temp, setTemp] = useState('');
    const [feels_like, setFeels_like] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wthrstatus, setWthrStatus] = useState('');
    const [imperialActive, setImperialActive] = useState(true);
    // const [unit, setUnit] = useState('imperial');
    // const [displayUnit, setDisplayUnit] = useState('F');


    const setWeatherResults = (json) => {
        let resJson = json;
        setTemp(resJson.current.temp);
        setFeels_like(resJson.current.feels_like);
        setHumidity(resJson.current.humidity);
        setWthrStatus(resJson.current.weather[0].main);
    };

    const success = (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
    }

    const error = (posErr) => {
        console.warn(`ERROR(${posErr.code}): ${posErr.message}`);
    }

    const fetchWeather = () => {
        let unit = '';
        if (imperialActive === true){
            unit = 'imperial';
        } else {
            unit = 'metric';
        }
        let url = `${baseURL}?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${key}`;
        fetch(url)
            .then(res => res.json())
            .then(json => setWeatherResults(json))
            .catch(err => console.log(err));
    }

    const changeUnitFalse = () => {
        setImperialActive(false);
    }

    const changeUnitTrue = () => {
        setImperialActive(true);
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
                <Row className='heads'>
                    <Col className="border">
                        <h2>Temperature</h2>
                    </Col>
                    <Col className="border">
                        <h2>Feels Like Temperature</h2>
                    </Col>
                </Row>
                <Row className='bodies'>
                    <Col className="border">
                        <h3>{temp}</h3>
                    </Col>
                    <Col className="border">
                        <h3>{feels_like}</h3>
                    </Col>
                </Row>
                <Row className='heads'>
                    <Col className="border">
                        <h2>Percent Humidity</h2>
                    </Col>
                    <Col className="border">
                        <h2>Weather Status</h2>
                    </Col>
                </Row>
                <Row className='bodies'>
                    <Col className="border">
                        <h3>{humidity}</h3>
                    </Col>
                    <Col className="border">
                        <h3>{wthrstatus}</h3>
                    </Col>
                </Row>
                <Row id='buttonContainer'>
                    {
                        imperialActive ? <button className='button' onClick={changeUnitFalse}>Change to <WiCelsius id='celsius'/></button> : <button className='button' onClick={changeUnitTrue}>Change to <WiFahrenheit id='fahrenheit'/></button>
                    }
                </Row>
            </div>
        </div>
    )
}

export default WeatherApp;