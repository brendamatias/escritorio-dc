import * as React from 'react';
import { Container } from './styles';
import aboutSrc from '../../images/about-image.jpg';

function About() {
  return (
    <Container>
      <img src={aboutSrc} alt="Projeto 01" />
      <div>
        <span>Sobre</span>
        <h1>We're not only design building, but also</h1>
        <p>
          Change the way you live life, closer to nature. Change the way you
          live life, closer to nature.Change the way you live life, closer to
          nature.Change the way you live life, closer to nature.Change the way
          you live life, closer to nature.Change the way you live life, closer
          to nature.
        </p>
      </div>
    </Container>
  );
}

export default About;
