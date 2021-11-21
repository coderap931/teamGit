import React from 'react';
import './App.css';
import { //1
  Button,
} from 'reactstrap';

let apiKey = "yzL8VYaOPxx1ke0AaJG7AISiofBfVrri";
let CustomerSecret = "YuiL1lgCdeR6L4bA";


const baseURL =  `https://app.ticketmaster.com//discovery/v2/events?apikey=${apiKey}`;
const baseImageURL = `https://app.ticketmaster.com/discovery/v2/events/{id}/images?apikey=${apiKey}`


// let displayEvents = data => {
//   console.log(data);
//   const eventData = (data);

//   const eventLatLongData = (eventData.latlong); //const converstionRate = (searchTermData.conversion_rates.USD);
//   console.log(eventLatLongData);
//   // const jsonConverstionRate = JSON.stringify(converstionRate);
//   // document.getElementById("resultDisplay").innerHTML = `${jsonConverstionRate}`;
// }

function ticketmasterapp() {
  
function fetchAPI() {
    fetch(baseURL)
    .then(res => res.json())
    .then(json => console.log(json)
    .catch(err => console.log(err)))
};

    return(
      <div>
        <h1>click me!</h1>
        <Button onClick={() => fetchAPI}>BUTTON</Button>

      </div>
    );    
  }

export default ticketmasterapp;