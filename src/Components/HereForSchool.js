import React from 'react';
import { Link } from 'react-router-dom';

const HereForSchool = (props) => {
  return (<div className='column'>
    <div>Most Common Communication Problems</div>
    <div>The video will go here</div>
    <div>If taken seriously, this will teach you valuable lessons about effective communication.</div>
    <div>This will probably be uncomfortable!</div>
    <div className='column'>
      <Link to='/'>Get me out of here!</Link>
      <Link to='/create-account'>Let's go!</Link>
    </div>
  </div>)
}
export default HereForSchool;
