import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ImgLogo from './image/logo.png';
import './index.css';

import Home from './App';
import App from './App';
import GetHug from './Hospital';
import Hospital from './Hospital';
import About from './About';
import Login from './About';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <React.StrictMode>
    <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt="logo"
          src={ImgLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Hug of the Soul
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/#hug-tv">Hug TV</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#hugs">Get Hugs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#hospital">Hugs per Hospital</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#login"><FontAwesomeIcon icon={faUser} /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hug-tv">
          <App />
        </Route>
        <Route path="/hugs">
          <GetHug />
        </Route>
        <Route path="/hospital">
          <Hospital />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
