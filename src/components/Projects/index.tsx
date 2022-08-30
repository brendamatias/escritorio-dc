import * as React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Container, ProjectItem, ProjectList } from './styles';
import project1 from '../../images/projects/project-01.jpeg';
import project2 from '../../images/projects/project-01.jpeg';
import project3 from '../../images/projects/project-03.jpeg';
import project4 from '../../images/projects/project-04.jpeg';

function Projects() {
  const [carousel, setCarousel] = React.useState(0);
  const [count, setCount] = React.useState(0);

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

  const moveCarousel = (direction: 'left' | 'right') => {
    setCount(direction === 'left' ? count + 384 : count - 384);
    setCarousel(direction === 'right' ? carousel + 1 : carousel - 1);
  };

  return (
    <Container id="projects">
      <div>
        <div className="title">
          <div>
            <span>Projetos</span>
            <h1>Tornamos cada projeto entregue único</h1>
          </div>

          <div>
            <button
              type="button"
              disabled={carousel === 0}
              onClick={() => moveCarousel('left')}
            >
              <FaAngleLeft />
            </button>

            <button
              type="button"
              disabled={carousel + 1 >= projects.length}
              onClick={() => moveCarousel('right')}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="projects">
          <ProjectList translateX={count}>
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
          </ProjectList>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
