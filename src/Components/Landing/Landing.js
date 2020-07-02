import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (<div className='obligatory-div'>
    <h1>Welcome to an Intense Lesson About Communication</h1>
    <Link to='/landing/improvement'>I'm here for my own personal improvement</Link>
    <Link to='/landing/school'>I'm here for a school assignment</Link>
    <Link to='/landing/curiosity'>I'm curious as to what this is</Link>
  </div>)
}
export default Landing;
