import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import AppRouter from './routers/AppRouter';
import './style/main.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
        <AppRouter />
  </Provider>,
  document.getElementById('root')
);
   