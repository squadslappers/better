import React from 'react';
import {Link} from 'react-router-dom';

const Introduction = (props) => {
  return(<div className='obligatory-div'>
    <h3>This is a unique opportunity, and it shouldn't be taken lightly.</h3>
    <span>Think of 3 - 5 people who know you well and care about you. Enter their names and email addresses on the next page.</span>
    <span>We are not responsible for incorrect or old addresses</span>
    <h3>This could be uncomfortable</h3>
    <Link to='/name-entry'>Let's go!</Link>
    <Link to='/legal'>legal disclaimer / release of liability from following advice</Link>
  </div>)
}
export default Introduction;
