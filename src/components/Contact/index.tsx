import * as React from 'react';
import { Container } from './styles';

function Contact() {
  return (
    <Container id="contact">
      <div>
        <span>Contato</span>
        <h1>Projete sua casa do jeito que sempre quis</h1>
        <p>
          Nossa equipe somam conhecimentos nas áreas de arquitetura e engenheira
          para executarmos da melhor forma projetos residências, comerciais,
          projetos estruturais e muito mais, sempre priorizando o ato de
          projetar com responsabilidade e criatividade.
        </p>

        <a href="teste" className="button">
          Contate
        </a>
      </div>
    </Container>
  );
}

export default Contact;
