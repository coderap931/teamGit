import React from 'react';

const Locator = () => {
    const LocationGetter = (pos) => {
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        let location = [latitude, longitude];
        // !! REMOVE THIS LATER
        console.log(location);
        console.log('Dont forget to remove these console logs');
    }
    navigator.geolocation.getCurrentPosition(LocationGetter);

    return(
        <>
        </>
    )
}

export default Locator;