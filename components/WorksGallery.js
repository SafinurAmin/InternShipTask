// components/WorksGallery.js
import { useState, useEffect } from 'react';

const WorksGallery = () => {
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the 8 works from NestJS on mount
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        console.info('Fetching works from NestJS...');
        const res = await fetch('http://localhost:3000/works');
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setWorks(data);
        console.info('Works fetched successfully:', data);
      } catch (err) {
        console.error('Error fetching works:', err);
        setError(err.message);
      }
    };
    fetchWorks();
  }, []);

  // Manually define rows:
  // Row 1 => items [0..2], Row 2 => [3..4], Row 3 => [5..7]
  const row1 = works.slice(0, 3);
  const row2 = works.slice(3, 5);
  const row3 = works.slice(5, 8);

  return (
    <section className="bg-[#262A2C] min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <h1 className="text-5xl font-extrabold mb-2">My works</h1>
        <p className="text-gray-400 mb-4 text-lg">Showcase About Works</p>

        {/* Divider */}
        <hr className="border-gray-600 mb-8" />

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-center mb-6">
            Failed to load works: {error}
          </p>
        )}

        {/* First row: 3 columns */}
        {!!row1.length && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {row1.map((work) => (
              <div
                key={work.id}
                className="rounded-lg bg-[#1F2123] shadow-lg overflow-hidden
                           transform transition-transform hover:scale-105"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm uppercase text-orange-500 font-semibold">
                    {work.category}
                  </p>
                  <h3 className="text-xl mt-2 font-bold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Second row: 2 columns */}
        {!!row2.length && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {row2.map((work) => (
              <div
                key={work.id}
                className="rounded-lg bg-[#1F2123] shadow-lg overflow-hidden
                           transform transition-transform hover:scale-105"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm uppercase text-orange-500 font-semibold">
                    {work.category}
                  </p>
                  <h3 className="text-xl mt-2 font-bold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Third row: 3 columns */}
        {!!row3.length && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {row3.map((work) => (
              <div
                key={work.id}
                className="rounded-lg bg-[#1F2123] shadow-lg overflow-hidden
                           transform transition-transform hover:scale-105"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm uppercase text-orange-500 font-semibold">
                    {work.category}
                  </p>
                  <h3 className="text-xl mt-2 font-bold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* "Load More Works" button after all 8 images */}
        <div className="flex justify-center">
          <button
            onClick={() => console.log('Load more clicked')}
            className="border border-orange-500 text-orange-500 py-3 px-8 rounded-full
                       hover:bg-orange-500 hover:text-white transition-colors"
          >
            Load More Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
