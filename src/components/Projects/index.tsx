import * as React from 'react';
import { Container } from './styles';

function Projects() {
  return (
    <Container id="projects">
      <div className="title">
        <span>Projetos</span>
        <h1>We're not only design building, but also</h1>
      </div>

      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <li key={item}>
            <div>
              <div />

              <div className="content">
                <strong>Projeto 0{item}</strong>
                <span>Construção</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Projects;
