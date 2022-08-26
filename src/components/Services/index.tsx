import * as React from 'react';
import { Container } from './styles';
import aboutSrc from '../../images/about-image.jpg';

function Services() {
  const services = ['Engenharia', 'Regularização', 'Arquitetura'];

  return (
    <Container>
      <div className="title">
        <span>Serviços</span>
        <h1>We're not only design building, but also</h1>
      </div>

      <ul>
        {services.map((service) => (
          <li key={service}>
            <img src={aboutSrc} alt="Projeto 01" />
            <strong>{service}</strong>
            <p>Projetos Estruturais, Arquitetônicos, Elétricos e Hidráulicos</p>

            <a href="teste" className="button">
              Saiba mais
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Services;
