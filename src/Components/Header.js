import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

const Header = (props) => {

  const logout = () => {
    axios.post('/logout')
      .then(() => props.history.push('/'))
      .catch(() => console.log('FAIL: logout'))
  }

  return (<div className='header'>
    This is a header!
    <button onClick={()=>logout()}>Log Out</button>
  </div>)
}
export default withRouter(Header);
