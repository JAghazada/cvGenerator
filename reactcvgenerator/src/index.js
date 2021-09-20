import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Pages from './Components/Pages';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
      <Pages/>
    
  </Provider>,
  document.getElementById('root')
);
