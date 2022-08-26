import * as React from 'react';
import { Container, Header } from './styles';

import logo from '../../images/logo.png';

function Home() {
  return (
    <Container>
      <div>
        <Header>
          <img src={logo} alt="DC Logo" />
          <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Projetos</li>
          </ul>

          <a href="contact" className="button">
            Contato
          </a>
        </Header>

        <div className="content">
          <h6>Arquitetura e Engenharia</h6>
          <h1>Lorem is lorem not Ipsum.</h1>
          <span>Change the way you live life, closer to nature.</span>

          <a href="more" className="button">
            Saiba mais
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Home;
