import React from 'react';
import {Link} from 'react-router-dom';

const CreateAccount = (props) => {
  return(<div className='obligatory-div'>
    <span>People need to know whom they're helping.</span>
    <input placeholder = 'name'/>
    <input placeholder = 'username'/>
    <input placeholder = 'password'/>
    <input placeholder = 'age (supposed to be a selector'/>
    <input placeholder = 'state (supposed to be a selector)'/>
    <input placeholder = 'email'/>
    <Link to='introduction'>Create Account</Link>
  </div>)
}
export default CreateAccount;
