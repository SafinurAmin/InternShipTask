// pages/project-detail.js
export default function ProjectDetail() {
    return (
      <section className="bg-[#262A2C] min-h-screen text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-5xl font-bold mb-2">Project Detail</h1>
          <p className="text-gray-400 mb-6">Details about this Project</p>
          <hr className="border-gray-600 mb-12" />
  
          {/* Large Featured Image */}
          <div className="mb-8">
            <img
              src="/images/Project3.png"
              alt="Featured Project"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
  
          {/* Project Story */}
          <h2 className="text-3xl font-bold mb-4">Project Story</h2>
          <div className="text-gray-300 text-lg leading-relaxed mb-10">

          <p>The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. </p>

          <p>We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.
          </p>
          </div>
          {/* Two Images Side by Side + "Day One" Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <img
                src="/images/hand-wireframe.png"
                alt="Hand Wireframe"
                className="w-full h-auto rounded-md shadow-md object-cover"
              />
            </div>
            <div>
              <img
                src="/images/triangle-3d.png"
                alt="3D Triangle"
                className="w-full h-auto rounded-md shadow-md object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Day One</h2>
          <div className="text-gray-300 text-lg leading-relaxed mb-8">
          <p>Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. </p>

          <p>And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills</p> 
          </div>
          {/* Prev / Next Nav */}
          <div className="flex justify-between items-center mb-16 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              &larr; Previous Work
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Next Work &rarr;
            </a>
          </div>
  
          {/* Other Projects */}
          <h2 className="text-3xl font-bold mb-6 text-center">Other Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Project 1 */}
            <div className="bg-[#1F2123] rounded-md p-4 text-center shadow-md">
              <img
                src="/images/logo1.png"
                alt="Logo Project 1"
                className="w-[360px] h-[465px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold">Logo Project 1</h3>
              <h3 className="text-xl-flex-center">Branding</h3>
            </div>
            {/* Project 2 */}
            <div className="bg-[#1F2123] rounded-md p-4 text-center shadow-md">
              <img
                src="/images/logo2.png"
                alt="Logo Project 2"
                className="w-[360px] h-[465px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold">Logo Project 2</h3>
              <h3 className="text-xl-flex-center">Branding</h3>
            </div>
            {/* Project 3 */}
            <div className="bg-[#1F2123] rounded-md p-4 text-center shadow-md">
              <img
                src="/images/logo3.png"
                alt="Logo Project 3"
                className="w-[360px] h-[465px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold">Logo Project 3</h3>
              <h3 className="text-xl-flex-center">Branding</h3>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  