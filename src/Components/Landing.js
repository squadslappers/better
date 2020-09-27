import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Ask from '../style/Images/Ask.png';
import Feedback from '../style/Images/Feedback.png';
import Improve from '../style/Images/Improve.png';

const Landing = () => {
  return (<div className='column'>
    <div className='landing__intro'>
      <h1>WELCOME TO BETTER</h1>
      <h3>An Intense Lesson About Communication</h3>
    </div>
    <AliceCarousel autoPlay autoPlayInterval='4000'>
      <div className='landing__pic-box'>
        <img src={Ask} alt='ask-icon' className='landing__pic'/>
        <p>Ask for anonymous advice.</p>
      </div>
      <div className='landing__pic-box'>
        <img src={Feedback} alt='ask-icon' className='landing__pic'/>
        <p>Get feedback from people you trust.</p>
      </div>
      <div className='landing__pic-box'>
        <img src={Improve} alt='ask-icon' className='landing__pic'/>
        <p>Improve yourself in meaningful ways.</p>
      </div>
    </AliceCarousel>
    <div className='landing__links'>
      <span className='landing__snippet'>What brings you here today?</span>
      <Link to='/improvement' className='landing__link'>I'm here for personal improvement</Link>
      <Link to='/school' className='landing__link'>I'm here for a school assignment</Link>
      <Link to='/curiosity' className='landing__link'>I'm curious as to what this is</Link>
      <Link to='/login' className='landing__red-text'>Login</Link>
    </div>
  </div>)
}
export default Landing;
