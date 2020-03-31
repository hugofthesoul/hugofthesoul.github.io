import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import ImgLogo from './logo.svg';
import App from './App';
import About from './About';
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
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <App />
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
