import React, {useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
const key = 'qmyzwymDsb6ie64LnEWnNTos2C8RlO0e';

const Ticketmaster = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [name0, setName0] = useState('');
    const [genre0, setGenre0] = useState('');
    const [eventURL0, setEventURL0] = useState('');
    const [name1, setName1] = useState('');
    const [genre1, setGenre1] = useState('');
    const [eventURL1, setEventURL1] = useState('');
    const [name2, setName2] = useState('');
    const [genre2, setGenre2] = useState('');
    const [eventURL2, setEventURL2] = useState('');

    const setEvents = (json) => {
        let resJson = json;

        setName0(resJson._embedded.events[0].name);
        setGenre0(resJson._embedded.events[0].classifications[0].genre.name);
        setEventURL0(resJson._embedded.events[0].url);

        setName1(resJson._embedded.events[1].name);
        setGenre1(resJson._embedded.events[1].classifications[0].genre.name);
        setEventURL1(resJson._embedded.events[1].url);

        setName2(resJson._embedded.events[2].name);
        setGenre2(resJson._embedded.events[2].classifications[0].genre.name);
        setEventURL2(resJson._embedded.events[2].url);
    };

    const success = (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
    }

    const error = (posErr) => {
        console.warn(`ERROR(${posErr.code}): ${posErr.message}`);
    }

    const fetchEvents = () => {
        let latlong = `${latitude},${longitude}`
        let url = `${baseURL}apikey=${key}&latlong=${latlong}&startDateTime=2021-11-21T01:00:00Z&endDateTime=2021-11-28T01:00:00Z`;
        fetch(url, {mode: "cors"})
            .then(res => res.json())
            .then(json => setEvents(json))
            .catch(err => console.log(err));
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => success(pos), (posErr) => error(posErr));
        if(longitude !== ''){
            fetchEvents();
        }
    })


    return(
        <div className='main'>
            <div className='mainDiv'>
            <Row className='heads'>
                <Col className="border">
                    <h2>Event Name</h2>
                </Col>
                <Col className="border">
                    <h2>Genre</h2>
                </Col>
                <Col className="border">
                    <h2>Link to Event (Ticketmaster)</h2>
                </Col>
            </Row>
            <Row className='bodies'>
                <Col className="border">
                    <h3>{name0}</h3>
                </Col>
                <Col className="border">
                    <h3>{genre0}</h3>
                </Col>
                <Col className="border">
                    <a href={eventURL0}>{eventURL0}</a>
                </Col>
            </Row>
            <Row className='heads'>
                <Col className="border">
                    <h2>Event Name</h2>
                </Col>
                <Col className="border">
                    <h2>Genre</h2>
                </Col>
                <Col className="border">
                    <h2>Link to Event (Ticketmaster)</h2>
                </Col>
            </Row>
            <Row className='bodies'>
                <Col className="border">
                    <h3>{name1}</h3>
                </Col>
                <Col className="border">
                    <h3>{genre1}</h3>
                </Col>
                <Col className="border">
                <a href={eventURL1}>{eventURL1}</a>
                </Col>
            </Row>
            <Row className='heads'>
                <Col className="border">
                    <h2>Event Name</h2>
                </Col>
                <Col className="border">
                    <h2>Genre</h2>
                </Col>
                <Col className="border">
                    <h2>Link to Event (Ticketmaster)</h2>
                </Col>
            </Row>
            <Row className='bodies'>
                <Col className="border">
                    <h3>{name2}</h3>
                </Col>
                <Col className="border">
                    <h3>{genre2}</h3>
                </Col>
                <Col className="border">
                <a href={eventURL2}>{eventURL2}</a>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Ticketmaster;