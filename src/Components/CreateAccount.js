import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const CreateAccount = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);
  const [passCheckError, setPassCheckError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [generalError, setExistingEmail] = useState(false);

  let firstNameErrorMessage, lastNameErrorMessage, passwordErrorMessage, passwordAgainErrorMessage, passCheckErrorMessage, ageErrorMessage, stateErrorMessage, emailErrorMessage, existingEmailMessage;

  if (firstNameError) { firstNameErrorMessage = (<span className='landing__error'>Please enter your first name.</span>) };
  if (lastNameError) { lastNameErrorMessage = (<span className='landing__error'>Please enter your last name.</span>) };
  if (passwordError) { passwordErrorMessage = (<span className='landing__error'>Please enter a password.</span>) };
  if (passwordAgainError) { passwordAgainErrorMessage = (<span className='landing__error'>Please enter your password again.</span>) };
  if (passCheckError) { passCheckErrorMessage = (<span className='landing__error'>Your passwords do not match. Please try again.</span>)};
  if (ageError) { ageErrorMessage = (<span className='landing__error'>Please enter your age.</span>) };
  if (stateError) { stateErrorMessage = (<span className='landing__error'>Please enter your state.</span>) };
  if (emailError) { emailErrorMessage = (<span className='landing__error'>Please enter a valid email.</span>) };
  if (generalError) { existingEmailMessage = (<span className='landing__error'>A user with that email already exists. Please log in.</span>)};

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

    if (passwordAgain.length === 0) {
      setPasswordAgainError(true);
      proceed = false;
    } else {setPasswordAgainError(false)}

    if (password !== passwordAgain){
      setPassCheckError(true);
      proceed = false;
    } else (setPassCheckError(false))

    // if (age.length === 0) {
    //   setAgeError(true);
    //   proceed = false;
    // } else {setAgeError(false)}

    // if (state.length === 0) {
    //   setStateError(true);
    //   proceed = false;
    // } else {setStateError(false)}

    if (email.length === 0) {
      setEmailError(true);
      proceed = false;
    } else {setEmailError(false)}

    if (proceed) {
      // axiosRegister();
      console.log('worked');
      props.history.push('/name-entry');
    } else {
      console.log('fail');
    }
  }

  const axiosRegister = () => {
    axios.post('/register', {firstName, lastName, password, age, state, email})
    .then((res)=>{
      setExistingEmail(false);
      console.log('data:', res.data);
      props.history.push('/name-entry');
    })
    .catch((err, req, res)=>{
      setExistingEmail(true);
    });
  }

  return (<div className='column'>
    <h1>Create an Account</h1>
    <span>People need to know whom they're helping, and this is where we'll save all of your feedback for you.</span>
    <div className='landing__form'>
      {firstNameErrorMessage}
      <input
        placeholder='first name'
        className='landing__input'
        onChange={(e) => {
          setFirstName(e.target.value);
          if (firstNameError) {setFirstNameError(false)};
        }}
        value={firstName} />
      {lastNameErrorMessage}
      <input
        placeholder='last name'
        className='landing__input'
        onChange={(e) => {
          setLastName(e.target.value);
          if (lastNameError) {setLastNameError(false)};
        }}
        value={lastName} />
      {existingEmailMessage}
      {emailErrorMessage}
      <input
        placeholder='email'
        className='landing__input'
        onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) {setEmailError(false)};
        }}
        value={email} />
      {passCheckErrorMessage}
      {passwordErrorMessage}
      <input
        placeholder='password'
        className='landing__input'
        onChange={(e) => {
          setPassword(e.target.value);
          if (passwordError) {setPasswordError(false)};
        }}
        value={password}
        type='password' />
      {passwordAgainErrorMessage}
      <input
        placeholder='repeat password'
        className='landing__input'
        onChange={(e) => {
          setPasswordAgain(e.target.value);
          if (passwordAgainError) {setPasswordAgainError(false)};
        }}
        value={passwordAgain}
        type='password' />
      {/* {ageErrorMessage}
      age<input
        type='month'
        max='2002-07'
        onChange={(e) => setAge(e.target.value)}
        value={age}/>
      {stateErrorMessage}
      state<select
        onChange={(e) => setState(e.target.value)}
        value={state}>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select> */}
      <button onClick={() => { checkForm() }} className='landing__link'>Create Account</button>
      <Link to='/' className='landing__white-text'>Cancel</Link>

    </div>
  </div>)
}
export default CreateAccount;
