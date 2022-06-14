import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import Provider from './context/Provider';

import PathRoutes from './config_/routes/PathRoutes';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <PathRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
