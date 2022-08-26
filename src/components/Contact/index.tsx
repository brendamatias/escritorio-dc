import * as React from 'react';
import { Container } from './styles';
import contactSrc from '../../images/contact-image.png';

function Contact() {
  return (
    <Container>
      <div>
        <span>Contato</span>
        <h1>We're not only design building, but also</h1>
        <p>
          We’re not only design building, but also We’re not only design
          building, but alsoWe’re not only design building, but also
        </p>

        <a href="teste" className="button">
          Contate
        </a>

        {/* <img src={contactSrc} alt="Projeto 01" /> */}
      </div>
    </Container>
  );
}

export default Contact;
