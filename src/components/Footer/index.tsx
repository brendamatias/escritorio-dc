import * as React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Container } from './styles';
import logo from '../../images/logo-footer.png';

function Footer() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Escritório DC Logo" />

        <div>
          <div className="links">
            <strong>Menu</strong>
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
          </div>

          <div className="location">
            <strong>Matriz</strong>
            <div>
              <span>Recife / Primavera - PE</span>
              <span>1417.1.45.1.20</span>
              <span>+55 81 999462115</span>
            </div>
          </div>

          <div className="socialMedia">
            <a
              href="https://www.instagram.com/escritorio.dc/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/escritorio.dc/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright 2022 ©{' '}
        <a href="http://laikacode.com.br/" target="_blank" rel="noreferrer">
          LaikaCode
        </a>
      </div>
    </Container>
  );
}

export default Footer;
