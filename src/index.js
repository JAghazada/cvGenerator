import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import Text from './Components/Cross';
import './index.css';
import Logo from './Components/Logo';

ReactDOM.render(
  <React.StrictMode>
    <Text/>

    <Logo/>
    <Login/>

  </React.StrictMode>,
  document.getElementById('root')
);
