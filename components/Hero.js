const Hero = () => {
  return (
    <section
      className="hero text-center py-20 text-white"
      style={{ backgroundColor: '#262A2C' }}
    >
      <h1 className="text-5xl font-bold leading-snug">
        Adaptive Logo Design<br />for Your Brand
      </h1>
      <div className="mt-8">
        <a
          href="#works"
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-orange-500 transition duration-300"
        >
          Explore Works
        </a>
      </div>
    </section>
  );
};

export default Hero;
