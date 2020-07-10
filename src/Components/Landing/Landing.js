import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (<div className='column'>
    <h1>Welcome to an Intense Lesson About Communication</h1>
    <div className='column'>
      <Link to='/landing/improvement'>I'm here for my own personal improvement</Link>
      <Link to='/landing/school'>I'm here for a school assignment</Link>
      <Link to='/landing/curiosity'>I'm curious as to what this is</Link>
    </div>
  </div>)
}
export default Landing;
