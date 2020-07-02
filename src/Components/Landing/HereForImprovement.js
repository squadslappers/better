import React from 'react';
import {Link} from 'react-router-dom';

const HereForImprovement = (props) => {
  return(<div className='obligatory-div'>
    <h1>Three things you should know before you continue:</h1>
    <div>The video will go here</div>
    <h3>This should be taken seriously, and it will be uncomfortable</h3>
    <Link to='/'>Get me out of here!</Link>
    <Link to='/create-account'>Let's go!</Link>

  </div>)
}
export default HereForImprovement;
