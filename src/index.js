import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './routes/routes'
import GlogalStyle from './styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <Route />
    <GlogalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
