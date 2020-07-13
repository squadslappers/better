import React, {useEffect} from 'react';
import routes from './routes';
import axios from 'axios';
import './style/style.scss';

function App() {
  useEffect(()=>{
    axios.get('/ping')
      .then(res => console.log('res:', res.data))
      .catch(()=>console.log('failed'));
  },[])
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
