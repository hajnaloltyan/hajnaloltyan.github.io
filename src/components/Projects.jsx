import { Link } from 'react-router-dom';
import projectDetails from '../projectDetails';

const Projects = () => (
  <section className="flex flex-col gap-5">
    <h2 className="font-rampart-one font-black text-3xl my-8">Projects</h2>
    {projectDetails.map(({
      id, image, name, technologies, description, githubURL, liveDemoURL,
    }) => (
      <article key={id} className="flex flex-col items-center gap-5 text-center py-5 mx-6 rounded-lg bg-[#2e2e2e68] shadow-lg shadow-black">
        <img src={image} alt={name} className="object-cover h-[200px] rounded-md"/>
        <div className="flex justify-between w-[65%]">
          <Link
            to={githubURL}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="text-md font-bold py-1 px-2 rounded text-rose-200 shadow-sm shadow-black bg-violet-900">Code</button>
          </Link>

          <Link
            to={liveDemoURL}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="text-md font-bold py-1 px-2 rounded text-rose-200 shadow-sm shadow-black bg-violet-900">Demo</button>
          </Link>
        </div>
        <h3 className="text-lg font-bold text-rose-200">{name}</h3>
        <ul className="flex flex-wrap justify-center gap-3 px-3 py-2">
          {technologies.map((technology) => (
            <li key={technology} className="py-1 px-2 rounded-2xl font-bold text-indigo-700 bg-pink-300">{technology}</li>
          ))}
        </ul>

        <p className="px-3 font-medium">{description}</p>
      </article>
    ))}
  </section>
);

export default Projects;
