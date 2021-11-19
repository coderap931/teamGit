import React, {useState} from 'react';

const Locator = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const LocationGetter = (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
    }
    navigator.geolocation.getCurrentPosition(LocationGetter);

    return(
        <div>
            <p>{`Your current geographical coordinates are - Latitude: ${latitude}, Longitude:${longitude}`}</p>
        </div>
    )
}

export default Locator;