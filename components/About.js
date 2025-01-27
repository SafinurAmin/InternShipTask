// pages/about.js
export default function AboutMe() {
    return (
      <section className="bg-[#2C3133] min-h-screen text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Heading & Subheading */}
          <h1 className="text-5xl font-bold mb-1">About Me</h1>
          <p className="text-gray-400 text-md mb-6">Little Brief About Myself</p>
          <hr className="border-gray-600 mb-12" />
  
          {/* Two-column layout: mission statement (left), paragraph (right) */}
          <div className="grid gap-8 mb-12 md:grid-cols-[45%_55%] items-start">
            {/* Left: Big mission text */}
            <div className="leading-[1.1]">
              <h2 className="text-6xl md:text-7xl font-extrabold">
                My mission <br />
                is to make <br />
                design <br />
                easier.
              </h2>
            </div>
  
            {/* Right: Paragraph */}
            <div className="text-gray-300 text-lg leading-relaxed">
              <p>
                Create custom Designs with AARONN that converts more visitors than
                any website. With lots of unique design, you can easily select a
                logo without hassle. Create custom landing logos with AARONN that
                converts more visitors than any website. With lots of revisions,
                you can easily build a logo without porbolem.
              </p>
            </div>
          </div>
  
          {/* Image Row */}
          <div className="mx-auto grid md:grid-cols-[315px_750px] gap-4 mb-12">
            {/* Left portrait with orange accent in the center */}
            <div className="relative group">
              <div
                className="absolute top-1/2 left-[-12px] -translate-y-1/2
                           h-16 w-6 border-2 border-orange-500 rounded-full
                           hidden md:block group-hover:border-orange-400
                           transition-colors"
              />
              <img
                src="/images/portrait1.png"
                alt="Portrait 1"
                className="w-[315px] h-[516px] object-cover rounded-md"
              />
            </div>
  
            {/* Right portrait with orange accent in the center (or lower if you wish) */}
            <div className="relative group">
              <div
                className="absolute top-1/2 right-[-12px] -translate-y-1/2
                           h-16 w-6 border-2 border-orange-500 rounded-full
                           hidden md:block group-hover:border-orange-400
                           transition-colors"
              />
              <img
                src="/images/portrait2.png"
                alt="Portrait 2"
                className="w-[750px] h-[515px] object-cover rounded-md"
              />
            </div>
          </div>
  
          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow me on:</h3>
            <div className="flex gap-8 text-gray-300 text-lg flex-wrap">
              <a href="#" className="hover:text-white transition-colors">
                DRIBBLE
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TWITTER
              </a>
              <a href="#" className="hover:text-white transition-colors">
                FACEBOOK
              </a>
              <a href="#" className="hover:text-white transition-colors">
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  