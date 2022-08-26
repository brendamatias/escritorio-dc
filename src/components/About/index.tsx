import * as React from 'react';
import { Container } from './styles';
import aboutSrc from '../../images/about-image.jpg';

function About() {
  return (
    <Container id="about">
      <img src={aboutSrc} alt="Projeto 01" />
      <div>
        <span>Sobre</span>
        <h1>We're not only design building, but also</h1>
        <p>
          Somos um escritório de Arquitetura e Engenheira com o objetivo de
          tornar cada projeto desenvolvido único, tornando-o moderno e
          contemporâneo de forma sutil e elegante, evidenciando a identidade de
          cada cliente.
        </p>
      </div>
    </Container>
  );
}

export default About;
