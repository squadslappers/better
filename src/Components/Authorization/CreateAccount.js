import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CreateAccount = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');

  const createAccount = () => {
    axios.post('/user', {firstName, lastName, username, password, age, state, email})
      .then(()=>props.history.push('/name-entry'))
      .catch(()=>console.log('failed'));
  }

  return (<div className='column'>
    <span>People need to know whom they're helping.</span>
    <div className='column'>
      <input placeholder='first name' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      <div>{firstName}</div>
      <input placeholder='last name' onChange={(e) => setLastName(e.target.value)} value={lastName} />
      <div>{lastName}</div>
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
      <div>{username}</div>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <div>{password}</div>
      <input placeholder='age' onChange={(e) => setAge(e.target.value)} value={age} />
      <div>{age}</div>
      <input placeholder='state' onChange={(e) => setState(e.target.value)} value={state} />
      <div>{state}</div>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
      <div>{email}</div>
      {/* <Link to='introduction'>Create Account</Link> */}
      <button onClick={() => {
        createAccount()
      }}>Create Account</button>
    </div>
  </div>)
}
export default CreateAccount;
