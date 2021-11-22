import React, {useState, useEffect} from 'react';


const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'V4T32jTNP5iky7Yy6FCkTMuJvvktqIm1abCiPqbW';




const Nasa = () => {
    // setting state variables for lon and lat and image
    const [image, setImage] = useState(''); 
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

      
  
    function assignLocation() {
        const shortLat = Math.trunc(latitude);
        const shortLon = Math.trunc(longitude)

        let url = `${baseUrl}?lon=${shortLon}&lat=${shortLat}&date=2014-01-01&api_key=${key}`;
        fetch(url)
        .then(res => {
            console.log(res)
            setImage(res.url)
        })

    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude)
            setLongitude(pos.coords.longitude)
          });
        if(longitude !== ''){
            assignLocation();
        }
      });




    return (
        <div>
            <img src={image} alt="" />
        </div>
    )



}

export default Nasa;