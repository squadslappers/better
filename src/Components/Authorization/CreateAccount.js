import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  let firstNameErrorMessage, lastNameErrorMessage, passwordErrorMessage, ageErrorMessage, stateErrorMessage, emailErrorMessage, generalErrorMessage;

  if (firstNameError) { firstNameErrorMessage = (<span style={{'color': 'red'}}>Please enter your first name.</span>) };
  if (lastNameError) { lastNameErrorMessage = (<span style={{'color': 'red'}}>Please enter your last name.</span>) };
  if (passwordError) { passwordErrorMessage = (<span style={{'color': 'red'}}>Please enter a password.</span>) };
  if (ageError) { ageErrorMessage = (<span style={{'color': 'red'}}>Please enter your age.</span>) };
  if (stateError) { stateErrorMessage = (<span style={{'color': 'red'}}>Please enter your state.</span>) };
  if (emailError) { emailErrorMessage = (<span style={{'color': 'red'}}>Please enter a valid email.</span>) };
  if (generalError) { generalErrorMessage = (<span style={{'color': 'red'}}>Sorry, something went wrong. Please try again later.</span>)}

  const checkForm = () => {
    let proceed = true;
    if (firstName.length === 0) {
      setFirstNameError(true);
      proceed = false;
    } else {setFirstNameError(false)}

    if (lastName.length === 0) {
      setLastNameError(true);
      proceed = false;
    } else {setLastNameError(false)};

    if (password.length === 0) {
      setPasswordError(true);
      proceed = false;
    } else {setPasswordError(false)}

    if (age.length === 0) {
      setAgeError(true);
      proceed = false;
    } else {setAgeError(false)}

    if (state.length === 0) {
      setStateError(true);
      proceed = false;
    } else {setStateError(false)}

    if (email.length === 0) {
      setEmailError(true);
      proceed = false;
    } else {setEmailError(false)}

    if (proceed) {
      axiosRegister();
    }
  }

  const axiosRegister = () => {
    axios.post('/register', {firstName, lastName, password, age, state, email})
    .then((res)=>{
      setGeneralError(false);
      console.log('data:', res.data);
      props.history.push('/name-entry');
    })
    .catch((err)=>{
      setGeneralError(true);
      console.log(err)
    });
  }

  return (<div className='column'>
    {generalErrorMessage}
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
      {passwordErrorMessage}
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      {ageErrorMessage}
      <input placeholder='age' onChange={(e) => setAge(e.target.value)} value={age} />
      {stateErrorMessage}
      <input placeholder='state' onChange={(e) => setState(e.target.value)} value={state} />
      {emailErrorMessage}
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
      <button onClick={() => {
        checkForm()
      }}>Create Account</button>
    </div>
  </div>)
}
export default CreateAccount;
