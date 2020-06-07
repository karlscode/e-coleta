import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route conponent={Home} path="/" exact />
      <Route conponent={CreatePoint} path="/create-point"/>
    </BrowserRouter>
  )
}

export default Routes;