import React from 'react';
import { Link } from 'react-router-dom';

const HereForCuriosity = (props) => {
  return (<div className='column'>
    <div>Most common communication problems:</div>
    <div>video goes here</div>
    <div>Most of life's problems stem from ineffective communication.</div>
    <div>Many people become frustrated when they feel they aren't being heard/understood, but few realize the barriers to effective communication.</div>
    <div>Better is a simple social experiment that shows us how to communicate effectively and how to put our pride/ego aside in order to make big strides in our personal progress.</div>
    <div>Hearing where we're coming short is uncomfortable for most people, so this shouldn't be taken lightly.</div>
    <div className='column'>
      <Link to='/'>Get me out of here!</Link>
      <Link to='/create-account'>Let's go!</Link>
    </div>
  </div>)
}
export default HereForCuriosity;
