import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import './Hospital.scss'

class Hospital extends React.Component {
  render(){
    return (
      <Container className="hospital">
        <h1 className="title mb-4">@Hospital</h1>
        <Card>
          <Card.Text>Let me know what you want me to put for you.</Card.Text>
          <Card.Subtitle><i>- Jay</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>May God sustain and strenghten you through this difficult hour.</Card.Text>
          <Card.Subtitle><i>- Jermaine</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>You are not alone. We are fighting with you.</Card.Text>
          <Card.Subtitle><i>- Kersing</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>Thank you for your hard work and saving so many lives!</Card.Text>
          <Card.Subtitle><i>- Mattias</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>We want to share hope because we have hope.</Card.Text>
          <Card.Subtitle><i>- Peter</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>
            <p>You guys are the real fighter, we engineers, scientists are there for you to make your life better. We can't feel the trauma you undergo by patients & their family in normal days and now world is going thru phase of pandemic as COVID-19 you people are working day & night to cure the patient without thinking about your health.</p>
            <p>We hope to reduce your depression thru various unconditional supports and see you guys smiling. Thank You Doctors & Medical Helpers.</p>
          </Card.Text>
          <Card.Subtitle><i>- Pratyoosh</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>estimados doctores, enfermeras y trabajadores en salud, este es un pequeño agradecimiento por todo lo que ustedes hcen por nosotros dia a dia. Por favor, no se sientan solos, somos muchos los que estamos orando por ustedes, pedimos que Dios les de fuerzas para vencer esta batalla. Un abrazo del alma.</Card.Text>
          <Card.Subtitle><i>- Rommy</i></Card.Subtitle>
        </Card>
      </Container>
    );
  }
}

export default Hospital;
