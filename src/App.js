import React from 'react';
import routes from './routes';
import './style/style.scss';
import Header from './Components/Header';

function App(props) {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
