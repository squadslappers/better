import React from 'react';
import axios from 'axios';

const Header = (props) => {

  const logout = () => {
    axios.post('/logout')
      .then((res) => props.history.push('/'))
      .catch(() => console.log('FAIL: logout'))
  }

  return (<div className='header'>
    This is a header!
    <button onClick={()=>logout()}>Log Out</button>
  </div>)
}
export default Header;
