import React from 'react';
import {Link} from 'react-router-dom';

const HereForSchool = (props) => {
  return(<div className='obligatory-div'>
    <h1>Most Common Communication Problems</h1>
    <div>The video will go here</div>
    <h3>If taken seriously, this will teach you valuable lessons about effective communication.</h3>
    <h3>This will probably be uncomfortable!</h3>
    <Link to='/'>Get me out of here!</Link>
    <Link to='/create-account'>Let's go!</Link>
  </div>)
}
export default HereForSchool;
