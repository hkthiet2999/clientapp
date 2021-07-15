import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Switch, Redirect, Route } from 'react-router';
import {Switch, Route} from 'react-router-dom'

import { BrowserRouter, Link } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import ForgotPwd from './components/ForgotPwd';
import main from './components/main';
import Dashboard from './components/template-MUI/Dashboard'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={main} />
          <Route exact path='/accounts/login' component={Login} />
          <Route exact path='/accounts/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/accounts/forgot-password' component={ForgotPwd} />
          <Route exact path='/revenue' component={Dashboard} />
        {/* <Route component={NotFound}/> */}
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
