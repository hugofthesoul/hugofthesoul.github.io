import React from 'react';

import Container from 'react-bootstrap/Container';
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

import ImgLogo from './image/logo-transparent.png';
import './index.scss';

ReactDOM.render((
  <React.StrictMode>
    <div className="fixed-top navigation-bar">
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/#"><img alt="Hug of the Soul" src={ImgLogo} width="30" height="30" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Home</Nav.Link>
          </Nav.Item>
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
        </Nav>
      </Container>
    </div>

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
