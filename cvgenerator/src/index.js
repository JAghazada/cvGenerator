import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Pages from './Components/Pages';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Pages/>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
