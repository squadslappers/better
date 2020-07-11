import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CreateAccount = (props) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
    getCategory();
  }, [])

  const getCategory = () => {
    console.log('running');
    axios.get('/api/test')
      .then((res)=>console.log('res:', res))
      .catch(()=>console.log('fail'))
  }

  return (<div className='column'>
    <span>People need to know whom they're helping.</span>
    <div className='column'>
      <input placeholder='name' onChange={(e) => setName(e.target.value)} value={name} />
      <div>{name}</div>
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
        console.log('name:', name);
        console.log('username:', username);
        console.log('password:', password);
        console.log('age:', age);
        console.log('state:', state);
        console.log('email:', email);
        props.history.push('/introduction');
      }}>Create Account</button>
    </div>
  </div>)
}
export default CreateAccount;
