import React, {useState} from 'react';

const Login = (props) => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');

  return(<div>
    <div>Login</div>
    <input placeholder='username or email' onChange={(e) => setUsernameEmail(e.target.value)} value={usernameEmail}/>
    <input placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
    <button>Create account</button>
  </div>)
}
export default Login
