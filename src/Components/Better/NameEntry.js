import React, {useState} from 'react';
import axios from 'axios';

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

  const submitNames = () => {
    axios.post('/names', {})
  }

  return(<div className='column'>
    <span>minimum of 3 people required</span>
    <div>Person 1</div>
    <input placeholder='first name' value={p1FirstName} onChange={(e)=>setP1FirstName(e.target.value)}/>
    <div>{p1FirstName}</div>
    <input placeholder='last name' value={p1LastName} onChange={(e)=>setP1LastName(e.target.value)}/>
    <div>{p1LastName}</div>
    <input placeholder='email' value={p1Email} onChange={(e)=>setP1Email(e.target.value)}/>
    <div>{p1Email}</div>
    <div>Person 2</div>
    <input placeholder='first name' value={p2FirstName} onChange={(e)=>setP2FirstName(e.target.value)}/>
    <div>{p2FirstName}</div>
    <input placeholder='last name' value={p2LastName} onChange={(e)=>setP2LastName(e.target.value)}/>
    <div>{p2LastName}</div>
    <input placeholder='email' value={p2Email} onChange={(e)=>setP2Email(e.target.value)}/>
    <div>{p2Email}</div>
    <div>Person 3</div>
    <input placeholder='first name' value={p3FirstName} onChange={(e)=>setP3FirstName(e.target.value)}/>
    <div>{p3FirstName}</div>
    <input placeholder='last name' value={p3LastName} onChange={(e)=>setP3LastName(e.target.value)}/>
    <div>{p3LastName}</div>
    <input placeholder='email' value={p3Email} onChange={(e)=>setP3Email(e.target.value)}/>
    <div>{p3Email}</div>
    <div>Person 4</div>
    <input placeholder='first name' value={p4FirstName} onChange={(e)=>setP4FirstName(e.target.value)}/>
    <div>{p4FirstName}</div>
    <input placeholder='last name' value={p4LastName} onChange={(e)=>setP4LastName(e.target.value)}/>
    <div>{p4LastName}</div>
    <input placeholder='email' value={p4Email} onChange={(e)=>setP4Email(e.target.value)}/>
    <div>{p4Email}</div>
    <div>Person 5</div>
    <input placeholder='first name' value={p5FirstName} onChange={(e)=>setP5FirstName(e.target.value)}/>
    <div>{p5FirstName}</div>
    <input placeholder='last name' value={p5LastName} onChange={(e)=>setP5LastName(e.target.value)}/>
    <div>{p5LastName}</div>
    <input placeholder='email' value={p5Email} onChange={(e)=>setP5Email(e.target.value)}/>
    <div>{p5Email}</div>
    <span>option to use standard message or customized</span>
    <input placeholder='This is the default message'></input>
    <button onClick={()=>{console.log('YEET'); props.history.push('/feedback')}}>Submit Request</button>
  </div>)
}
export default NameEntry;
