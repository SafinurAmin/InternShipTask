import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  // Helper to decide link based on title
  const getProjectLink = (title) => {
    if (title === 'NFT Glimps') {
      // Link to wherever the NFT glimpse page is
      return '/ProjectDetails'; 
    }
    // Return null or '#' for no link
    return null;
  };

  return (
    <section className="projects-section py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">My Projects Highlight</h2>
        <a
          href="/portfolio"
          className="explore-btn mt-4 px-6 py-3 bg-orange-500 text-white font-semibold 
                     rounded-full hover:bg-orange-600 hover:shadow-[0_0_10px_2px_#e77108] 
                     hover:border hover:border-[#e77108] transition duration-300"
        >
          Explore More →
        </a>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const link = getProjectLink(project.title);

          // If link is set, wrap the card in a <Link>. Otherwise, just render a div.
          const CardContent = (
            <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg">
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
          );

          return link ? (
            <Link href={link} key={index}>
              {CardContent}
            </Link>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;