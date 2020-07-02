import React from 'react';
import {Link} from 'react-router-dom';

const NameEntry = (props) => {
  return(<div className='obligatory-div'>
    <span>minimum of 3 people required</span>
    <input placeholder='first name'/>
    <input placeholder='last name'/>
    <input placeholder='email'/>
    <input placeholder='first name'/>
    <input placeholder='last name'/>
    <input placeholder='email'/>
    <input placeholder='first name'/>
    <input placeholder='last name'/>
    <input placeholder='email'/>
    <input placeholder='first name'/>
    <input placeholder='last name'/>
    <input placeholder='email'/>
    <input placeholder='first name'/>
    <input placeholder='last name'/>
    <input placeholder='email'/>
    <span>option to use standard message or customized</span>
    <input value='This is the default message'></input>
    <Link to='/feedback'>Submit Request</Link>'
  </div>)
}
export default NameEntry;
