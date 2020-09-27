import React from 'react';
import { Link } from 'react-router-dom';

const HereForSchool = (props) => {
  return (<div className='column'>
    <h1>Most Common Communication Problems</h1>
    <div className='landing__vid'>The video will go here</div>
    <h3>If taken seriously, this will teach you valuable lessons about effective communication.</h3>
    <h3>This will probably be uncomfortable!</h3>
    <div className='landing__links'>
      <Link to='/create-account' className='landing__link'>Let's go!</Link>
      <Link to='/' className='landing__red-text'>Get me out of here!</Link>
    </div>
  </div>)
}
export default HereForSchool;
