import React from 'react';
import { Link } from 'react-router-dom';

const HereForImprovement = (props) => {
  return (<div className='column'>
    <div>Three things you should know before you continue:</div>
    <div>The video will go here</div>
    <div>This should be taken seriously, and it will be uncomfortable</div>
    <div className='column'>
      <Link to='/'>Get me out of here!</Link>
      <Link to='/create-account'>Let's go!</Link>
    </div>

  </div>)
}
export default HereForImprovement;
