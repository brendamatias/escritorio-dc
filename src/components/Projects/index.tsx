import * as React from 'react';
import { Container, ProjectItem } from './styles';
import project1 from '../../images/projects/project-01.jpeg';
import project2 from '../../images/projects/project-01.jpeg';
import project3 from '../../images/projects/project-03.jpeg';
import project4 from '../../images/projects/project-04.jpeg';

function Projects() {
  const projects = [
    {
      title: 'Casa Vila',
      subtitle: 'Primavera - PE (2020)',
      backgroundImage: project1,
    },
    {
      title: 'Centro Gastronômico',
      subtitle: 'Projeto de TCC (2019)',
      backgroundImage: project2,
    },
    {
      title: 'Quarto Masculino',
      subtitle: 'Ribeirão - PE (2020)',
      backgroundImage: project3,
    },
    {
      title: 'Suíte Master',
      subtitle: 'Primavera - PE (2020)',
      backgroundImage: project4,
    },
  ];

  return (
    <Container id="projects">
      <div className="title">
        <span>Projetos</span>
        <h1>Tornamos cada projeto entregue único</h1>
      </div>

      <ul>
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            backgroundImage={project.backgroundImage}
          >
            <div>
              <div />

              <div className="content">
                <strong>{project.title}</strong>
                <span>{project.subtitle}</span>
              </div>
            </div>
          </ProjectItem>
        ))}
      </ul>
    </Container>
  );
}

export default Projects;
