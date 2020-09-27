import React, {useState} from 'react';

const Message = (props) => {
  return(<div className='message'>
    <div className='message__inner'>
      <h1>Enter a Message Asking for Advice</h1>
      <textarea className='message__input'/>
    </div>
  </div>)
}
export default Message;
