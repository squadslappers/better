import React from 'react';
import { Link } from 'react-router-dom';

const Feedback = (props) => {
  return (<div className='column'>
    Your results will be ready in approximately 5 days... stand by.
    <Link to='/'>Go Back Home</Link>
  </div>)
}
export default Feedback;
