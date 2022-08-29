import * as React from 'react';
import { Container } from './styles';
import aboutSrc from '../../images/about-image.jpeg';

function About() {
  return (
    <Container id="about">
      <img src={aboutSrc} alt="Projeto 01" />
      <div>
        <span>Sobre</span>
        <h1>Mais do que um escritório de Arquitetura e Engenharia</h1>
        <p>
          Buscamos sempre introduzir uma mentalidade inovadora e ousada no
          mercado, desenvolvendo projetos criativos com padrões elaborados e de
          características singulares, desenvolvendo projetos arquitetônicos e
          urbanísticos de diversas escalas, além de projetos de interiores e
          perspectivas digitais.
        </p>
      </div>
    </Container>
  );
}

export default About;
