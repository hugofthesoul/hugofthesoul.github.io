import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCross,
  faSmile,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTrello
} from '@fortawesome/free-brands-svg-icons'

import './About.scss'

class About extends React.Component {

  render(){
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="title">About</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg={8} md={8}>
            <h2><FontAwesomeIcon icon={faSmile} fixedWidth /> Purpose</h2>
            <p class="text-light">
              As the world battles COVID-19 many dashboards and visualizations have been created
              to track the spread of the virus. We list some examples below:
            </p>
            <ul>
              <li><a href="https://who.maps.arcgis.com/apps/opsdashboard/index.html#/c88e37cfc43b4ed3baf977d77e4a0667">WHO: Coronavirus disease (COVID-19) Situation Dashboard</a></li>
              <li><a href="https://coronavirus.jhu.edu/map.html">Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University</a></li>
              <li><a href="https://nssac.bii.virginia.edu/covid-19/dashboard/">University of Virginia Biocomplexity Institute COVID-19 Surveillance Dashboard</a></li>
            </ul>
            <p class="text-light">
              Why is <em>everyone</em> so focused on what is going wrong?
              We felt like something was missing and a change in perspective was necessary.
              Why not  highlight the good things that are happening because of COVID-19.
              This application is the result of that vision.
              Thank you for visiting! We hope that you'll leave encouraged and
              ready to keep fighting the good fight wherever you are.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <h2>&nbsp;</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg={8} md={8}>
            <h2><FontAwesomeIcon icon={faCross} fixedWidth /> Backstory</h2>
            <p class="text-light">
              Our founder was moved by the suicide of an Italian nurse and wondered how
              we might prevent further suicides of medical care providers amidst the COVID-19 pandemic.
              She proposed this project (<a href="https://devpost.com/software/abrazo-del-alma">abrazo del alma</a>)
              to address the <code>#MentalHealth</code> challenge at the <a href="https://www.covidhack.com/">COVID-19 Global Church Hackathon</a>.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <h2>&nbsp;</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8}>
            <h2><FontAwesomeIcon icon={faUsers} fixedWidth /> Connect</h2>
            <p class="text-light">
              Excited about what we're building next? Want to help out? If so,
              please subscribe to our <a href="https://groups.google.com/forum/#!forum/hugofthesoul">mailing list </a>
              to learn about what we're up to.
            </p>
            <p class="text-light">
              <a href="https://github.com/hugofthesoul" title="Github">
                <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
              </a>
              <a href="https://trello.com/b/FNG7Q3NJ/covid19-christian-hackathon-hug-of-soul" title="Trello">
                <FontAwesomeIcon icon={faTrello} size="2x" fixedWidth />
              </a>
            </p>
          </Col>
          <Col lg={4} md={4}>
            <h2>&nbsp;</h2>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default About;
