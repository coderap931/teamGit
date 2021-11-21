import React from 'react'
import { useState } from 'react';


const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'V4T32jTNP5iky7Yy6FCkTMuJvvktqIm1abCiPqbW';




const Nasa = (props) => {
    // setting state variables for lon and lat and image
    const [image, setImage] = useState('');
    const shortLat = Math.trunc(props.latitude);
    const shortLon = Math.trunc(props.longitude)


    let url = `${baseUrl}?lon=${shortLon}&lat=${shortLat}&date=2014-01-01&api_key=${key}`;
    console.log(url)

    const handleClick = () => {
        fetch(url)
            .then(res => res)
            .then(res => {
                console.log(res)
                setImage(res.url)
            })
    }





    return (
        <div>
            <img src={image} alt="" />
            <button onClick={handleClick}>Button</button>
        </div>
    )



}






export default Nasa
