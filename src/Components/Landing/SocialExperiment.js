import React from 'react';
import { Link } from 'react-router-dom';

const SocialExperiment = (props) => {
  return (<div className='column'>
    <h1>This social experiment will effectively show you the following:</h1>
    <ul>
      <li>The people who know us best are usually the ones most aware of our strengths and weaknesses.</li>
      <li>Many of us have an elevated image of ourselves, so we rarely ask others for advice.</li>
      <li>There is no such thing as unsolicited advice. For advice to work, the recipient needs to have a question.</li>
      <li>A question about the subject is the "bucket" into which advice can land.</li>
      <li>A simple adjustment in behavior can lead to drastic improvements—like adjusting a golf swing</li>
    </ul>
    <Link to='/create-account'>Get Started</Link>
  </div>)
}
export default SocialExperiment;
