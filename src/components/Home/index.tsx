import * as React from 'react';
import { Container, Header } from './styles';

import logo from '../../images/logo.png';

function Home() {
  return (
    <Container id="home">
      <div>
        <Header>
          <img src={logo} alt="DC Logo" />
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
          </ul>

          <a
            href="https://api.whatsapp.com/send?phone=5581999462115&text="
            className="button"
            target="_blank"
            rel="noreferrer"
          >
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
