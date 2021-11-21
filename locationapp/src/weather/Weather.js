import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
const key = '76d1fa4b8a01de7c08aedbe43eee5eb7';

const WeatherApp = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [temp, setTemp] = useState('');
    const [feels_like, setFeels_like] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wthrstatus, setWthrStatus] = useState('');
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
        let url = `${baseURL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;
        fetch(url)
            .then(res => res.json())
            .then(json => setWeatherResults(json))
            .catch(err => console.log(err));
    }

    // const changeUnit = () => {
    //     if(unit === 'imperial'){
    //         setUnit('metric');
    //         setDisplayUnit('C');
    //         fetchWeather();
    //     } else if (unit === 'metric'){
    //         setUnit('imperial');
    //         setDisplayUnit('F');
    //         fetchWeather();
    //     } else {
    //         console.log('What the heck kinda unit of measurement is that?!')
    //     }
    // }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => success(pos), (posErr) => error(posErr));
        if(longitude !== ''){
            fetchWeather();
        }
    })


    return(
        <div className='main'>
            <div className='mainDiv'>
                {/* <Button onClick={changeUnit}>Change Units of Measurement</Button> */}
                <Table striped>
                    <thead>
                        <tr>
                            {/* <th>Current Units of Measurement</th> */}
                            <th>Temperature (F)</th>
                            <th>Feels Like Temperature (F)</th>
                            <th>Percent Humidity</th>
                            <th>Weather Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{displayUnit}</td> */}
                            <td>{temp}</td>
                            <td>{feels_like}</td>
                            <td>{humidity}</td>
                            <td>{wthrstatus}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default WeatherApp;