import * as React from 'react';
import { Container } from './styles';
import aboutSrc from '../../images/about-image.jpg';

function Services() {
  const services = [
    {
      label: 'Projetos',
      description:
        'Projetos Estruturais, Arquitetônicos, Elétricos e Hidráulicos e Projetos em BIM',
    },
    {
      label: 'Reformas',
      description:
        ' Projetos Estruturais, Arquitetônicos, Elétricos e Hidráulicos e Projetos em BIM',
    },
    { label: 'Arquitetura', description: '' },
  ];

  return (
    <Container id="services">
      <div className="title">
        <span>Serviços</span>
        <h1>Você tem um sonho? Podemos torná-lo realidade!</h1>
      </div>

      <ul>
        {services.map((service) => (
          <li key={service.label}>
            <div>
              <img src={aboutSrc} alt="Projeto 01" />
              <strong>{service.label}</strong>
              <p>{service.description}</p>
            </div>

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
