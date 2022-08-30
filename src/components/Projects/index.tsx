import * as React from 'react';
import { useQuery } from 'react-query';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Container, ProjectItem } from './styles';
import { Project } from '../../interfaces';

function Projects() {
  const query = `query MyQuery {
    allProjetos {
      id
      _status
      subtitle
      title
      updatedAt
      createdAt
      image {
        id
        _createdAt
        _updatedAt
        filename
        url
      }
    }
  }`;

  const fetchProjects = async () => {
    const res = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${process.env.DATO_CMS_TOKEN}`,
      }),
      body: JSON.stringify({
        operationName: 'MyQuery',
        variables: null,
        query,
      }),
    });

    return res.json();
  };

  const { data } = useQuery('projects', fetchProjects);

  return (
    <Container id="projects">
      <div>
        <div className="title">
          <div>
            <span>Projetos</span>
            <h1>Tornamos cada projeto entregue único</h1>
          </div>

          <div>
            <button type="button">
              <FaAngleLeft />
            </button>

            <button type="button">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <ul>
          {data?.data?.allProjetos?.map((project: Project) => (
            <ProjectItem key={project.id} backgroundImage={project.image.url}>
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
      </div>
    </Container>
  );
}

export default Projects;
