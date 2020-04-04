import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './App';
import App from './App';
import GetHug from './Hugs';
import Hospital from './Hospital';
import About from './About';
import Login from './About';

import * as serviceWorker from './serviceWorker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ImgLogo from './image/logo-transparent.png';
import './index.scss';

ReactDOM.render((
  <React.StrictMode>       
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top navigation-bar">
      <Container>
      <Navbar.Brand href="#home"><img alt="Hug of the Soul" src={ImgLogo} width="30" height="30" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>                    
          <Nav.Link href="/#">Home</Nav.Link>
          <Nav.Link href="/#hug-tv">Hug TV</Nav.Link>
          <Nav.Link href="/#hugs">Get Hugs</Nav.Link>
          <Nav.Link href="/#hospital">Hugs per Hospital</Nav.Link>          
          <Nav.Link href="/#about">About</Nav.Link>          
        </Nav>
        <div class="flex-fill">&nbsp;</div>
        <Nav>
          <Nav.Link href="/#"><FontAwesomeIcon icon={faUser} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
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
