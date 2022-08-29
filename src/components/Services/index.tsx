import * as React from 'react';
import { Container } from './styles';
import aboutSrc from '../../images/about-image.jpeg';

function Services() {
  const services = [
    {
      label: 'Arquitetura e Urbanismo',
      description:
        'Ênfase em elaboração de planos e projetos associados à arquitetura em todas as suas etapas, definindo materiais, acabamentos, técnicas, analisando dados e informações. Fiscalizar e executar obras e serviços, prestar serviços de consultoria e assessoramento, bem como estabelecer políticas de gestão.',
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
