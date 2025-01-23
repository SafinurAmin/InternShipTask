import { useEffect, useState } from 'react';
import axios from 'axios';

const WorksGallery = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects').then((response) => {
      setWorks(response.data);
    });
  }, []);

  return (
    <section className="works-gallery py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">My Works</h1>
        <p className="text-lg mb-6">Showcase About Works</p>
        <hr className="border-t border-gray-500 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="gallery-item text-center bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <div className="caption">
                <p className="category text-orange-500 font-semibold">
                  {work.category}
                </p>
                <h4 className="text-xl font-bold">{work.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
