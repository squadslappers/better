import React from 'react';
import { Link } from 'react-router-dom';

const HereForImprovement = (props) => {
  return (<div className='column'>
    <h1>Three things you should know before you continue:</h1>
    <div className='landing__vid'>The video will go here</div>
    <h3>This should be taken seriously, and it will be uncomfortable</h3>
    <div className='landing__links'>
      <Link to='/create-account' className='landing__link'>Let's go!</Link>
      <Link to='/' className='landing__red-text'>Get me out of here!</Link>
    </div>

  </div>)
}
export default HereForImprovement;
