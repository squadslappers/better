import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Message from './Message';

const NameEntry = (props) => {

  const [p1FirstName, setP1FirstName] = useState('');
  const [p1LastName, setP1LastName] = useState('');
  const [p1Email, setP1Email] = useState('');

  const [p2FirstName, setP2FirstName] = useState('');
  const [p2LastName, setP2LastName] = useState('');
  const [p2Email, setP2Email] = useState('');

  const [p3FirstName, setP3FirstName] = useState('');
  const [p3LastName, setP3LastName] = useState('');
  const [p3Email, setP3Email] = useState('');

  const [p4FirstName, setP4FirstName] = useState('');
  const [p4LastName, setP4LastName] = useState('');
  const [p4Email, setP4Email] = useState('');

  const [p5FirstName, setP5FirstName] = useState('');
  const [p5LastName, setP5LastName] = useState('');
  const [p5Email, setP5Email] = useState('');

  const [message, setMessage] = useState('');

  const [notEnoughPeople, setNotEnoughPeople] = useState(false);
  const [noMessage, setNoMessage] = useState(false);

  let notEnoughPeopleMessage, noMessageMessage;
  if (notEnoughPeople) {
    notEnoughPeopleMessage = (<span style={{'color': 'red'}}>* Minimum of 3 people required</span>)
  }
  if (noMessage) {
    noMessageMessage = (<span style={{'color': 'red'}}>Enter a message you would like to send.</span>)
  }

  const submitNames = () => {
    let proceed = true;
    if (
      !p1FirstName || !p1LastName || !p1Email ||
      !p2FirstName || !p2LastName || !p2Email ||
      !p3FirstName || !p3LastName || !p3Email
    ) {
      proceed = false;
      setNotEnoughPeople(true);
    } else {
      setNotEnoughPeople(false);
    }

    if ( !message ){
      proceed = false;
      setNoMessage(true);
    } else {
      setNoMessage(false);
    }

    if (proceed) {
      axiosCall();
    }
  }

  const axiosCall = () => {
    axios.post('/api/email', {
      p1FirstName, p1LastName, p1Email,
      p2FirstName, p2LastName, p2Email,
      p3FirstName, p3LastName, p3Email,
      p4FirstName, p4LastName, p4Email,
      p5FirstName, p5LastName, p5Email,
      message
    })
      .then(res => console.log(res.data))
      .catch(()=>console.log('fail'))
  }

  return(<div className='column'>
    <Message/>
    <h1>Time to Ask for Advice</h1>
    <span>{notEnoughPeopleMessage}</span>
    <div className='advice__required-box'>
      <span>Person 1</span>
      <div className='advice__names'>
        <input className='landing__input' placeholder='first name' value={p1FirstName} onChange={(e)=>setP1FirstName(e.target.value)}/>
        <input className='landing__input' placeholder='last name' value={p1LastName} onChange={(e)=>setP1LastName(e.target.value)}/>
      </div>
      <input className='landing__input' placeholder='email' value={p1Email} onChange={(e)=>setP1Email(e.target.value)}/>

      <span>Person 2</span>
      <div className='advice__names'>
        <input className='landing__input' placeholder='first name' value={p2FirstName} onChange={(e)=>setP2FirstName(e.target.value)}/>
        <input className='landing__input' placeholder='last name' value={p2LastName} onChange={(e)=>setP2LastName(e.target.value)}/>
      </div>
      <input className='landing__input' placeholder='email' value={p2Email} onChange={(e)=>setP2Email(e.target.value)}/>

      <span>Person 3</span>
      <div className='advice__names'>
        <input className='landing__input' placeholder='first name' value={p3FirstName} onChange={(e)=>setP3FirstName(e.target.value)}/>
        <input className='landing__input' placeholder='last name' value={p3LastName} onChange={(e)=>setP3LastName(e.target.value)}/>
      </div>
      <input className='landing__input' placeholder='email' value={p3Email} onChange={(e)=>setP3Email(e.target.value)}/>

      <span>Person 4</span>
      <div className='advice__names'>
        <input className='landing__input' placeholder='first name' value={p4FirstName} onChange={(e)=>setP4FirstName(e.target.value)}/>
        <input className='landing__input' placeholder='last name' value={p4LastName} onChange={(e)=>setP4LastName(e.target.value)}/>
      </div>
      <input className='landing__input' placeholder='email' value={p4Email} onChange={(e)=>setP4Email(e.target.value)}/>

      <span>Person 5</span>
      <div className='advice__names'>
        <input className='landing__input' placeholder='first name' value={p5FirstName} onChange={(e)=>setP5FirstName(e.target.value)}/>
        <input className='landing__input' placeholder='last name' value={p5LastName} onChange={(e)=>setP5LastName(e.target.value)}/>
      </div>
      <input className='landing__input' placeholder='email' value={p5Email} onChange={(e)=>setP5Email(e.target.value)}/>
    </div>

    <div className='landing__links'>
      <button className='landing__link'>Add a Message</button>
      <Link to='/' className='landing__red-text'>Cancel</Link>
    </div>
  </div>)
}
export default NameEntry;
