import * as React from 'react';
import { FaBars } from 'react-icons/fa';
import { Container, Header, Menu, MenuMobile } from './styles';

import logo from '../../images/logo.png';

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const links = [
    { path: '#home', label: 'Início' },
    { path: '#about', label: 'Sobre' },
    { path: '#services', label: 'Serviços' },
    { path: '#projects', label: 'Projetos' },
  ];

  return (
    <Container id="home">
      <div>
        <Header>
          <img src={logo} alt="DC Logo" />
          <Menu>
            <ul>
              {links.map((link) => (
                <li key={link.path}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=5581999462115&text="
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Contato
            </a>
          </Menu>

          {isOpen && (
            <MenuMobile>
              {links.map((link) => (
                <li key={link.path}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}

              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5581999462115&text="
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contato
                </a>
              </li>
            </MenuMobile>
          )}
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
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
