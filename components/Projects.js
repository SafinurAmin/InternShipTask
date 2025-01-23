import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <section className="projects-section py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">My Projects Highlight</h2>
        <button className="explore-btn mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
          Explore More →
        </button>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <h4 className="text-xl font-bold text-white flex-grow">
                {project.title}
              </h4>
              <div className="border-l-4 border-orange-500 h-6"></div>
            </div>
            <img
              src={`/images/project${index + 1}.png`}
              alt={project.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-orange-500 font-semibold">
                Client: {project.client}
              </p>
              <p className="text-gray-300">Work: {project.work}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
