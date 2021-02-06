import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes/routes'
import GlogalStyle from './styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <Route />
    <GlogalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
