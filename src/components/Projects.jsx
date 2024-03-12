import { Link } from 'react-router-dom';
import projectDetails from '../projectDetails';

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    {projectDetails.map(({
      id, image, name, technologies, description, githubURL, liveDemoURL,
    }) => (
      <article key={id} className="project-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <div className="button-wrapper">
          <Link
            to={githubURL}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="project-button">Code</button>
          </Link>

          <Link
            to={liveDemoURL}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="project-button">Demo</button>
          </Link>
        </div>
        <ul className="tech-list">
          {technologies.map((technology) => (
            <li key={technology} className="tech-item">{technology}</li>
          ))}
        </ul>

        <p>{description}</p>
      </article>
    ))}
  </section>
);

export default Projects;
