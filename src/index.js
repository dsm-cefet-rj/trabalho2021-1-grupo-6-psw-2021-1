import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from 'react-redux'
import './bootstrap/dist/css/bootstrap.min.css';

import store from './store'
=======
import './bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 43bc8c2b07eebeacd83c90d15684807b51c1b2af
=======
import './bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 43bc8c2b07eebeacd83c90d15684807b51c1b2af

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
