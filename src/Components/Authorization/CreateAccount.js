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

  const [firstNameError, setFirstNameError] = useState(true);
  const [lastNameError, setLastNameError] = useState(true);
  const [usernameError, setUsernameError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [ageError, setAgeError] = useState(true);
  const [stateError, setStateError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  let firstNameErrorMessage, lastNameErrorMessage, usernameErrorMessage, passwordErrorMessage, ageErrorMessage, stateErrorMessage, emailErrorMessage;

  if (firstNameError) { firstNameErrorMessage = (<span style={{'color': 'red'}}>Please enter your first name.</span>) };
  if (lastNameError) { lastNameErrorMessage = (<span style={{'color': 'red'}}>Please enter your last name.</span>) };
  if (usernameError) { usernameErrorMessage = (<span style={{'color': 'red'}}>Please enter a username.</span>) };
  if (passwordError) { passwordErrorMessage = (<span style={{'color': 'red'}}>Please enter a password.</span>) };
  if (ageError) { ageErrorMessage = (<span style={{'color': 'red'}}>Please enter your age.</span>) };
  if (stateError) { stateErrorMessage = (<span style={{'color': 'red'}}>Please enter your state.</span>) };
  if (emailError) { emailErrorMessage = (<span style={{'color': 'red'}}>Please enter a valid email.</span>) };

  const checkForm = () => {
    if (firstName.length === 0) {setFirstNameError(true)}
    else {setFirstNameError(false)}

    if (lastName.length === 0) {setLastNameError(true)}
    else {setLastNameError(false)};

    if (username.length === 0) {setUsernameError(true)}
    else {setUsernameError(false)}

    if (password.length === 0) {setPasswordError(true)}
    else {setPasswordError(false)}

    if (age.length === 0) {setAgeError(true)}
    else {setAgeError(false)}

    if (state.length === 0) {setStateError(true)}
    else {setStateError(false)}

    if (email.length === 0) {setEmailError(true)}
    else {setEmailError(false)}
  }

  const axiosCall = () => {
    axios.post('/user', {firstName, lastName, username, password, age, state, email})
    .then(()=>props.history.push('/name-entry'))
    .catch(()=>console.log('failed'));
  }

  const submitForm = () => {
    checkForm();
    if (firstNameError || lastNameError || usernameError || passwordError ||ageError || stateError || emailError) {
      console.log('errors :(');
    } else {
      console.log('no errors here!');
    }
  }

  return (<div className='column'>
    <span>People need to know whom they're helping.</span>
    <div className='column'>
      {firstNameErrorMessage}
      <input placeholder='first name' onChange={(e) => {
        setFirstName(e.target.value);
        if (e.target.value.length > 0) {
          setFirstNameError(false);
        }
      } } value={firstName} />
      {lastNameErrorMessage}
      <input placeholder='last name' onChange={(e) => setLastName(e.target.value)} value={lastName} />
      {usernameErrorMessage}
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
      {passwordErrorMessage}
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      {ageErrorMessage}
      <input placeholder='age' onChange={(e) => setAge(e.target.value)} value={age} />
      {stateErrorMessage}
      <input placeholder='state' onChange={(e) => setState(e.target.value)} value={state} />
      {emailErrorMessage}
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
      <button onClick={() => {
        submitForm()
      }}>Create Account</button>
    </div>
  </div>)
}
export default CreateAccount;
