const Profile = () => {
  return (
    <section
      className="profile flex flex-col md:flex-row items-center justify-between px-8 py-20"
      style={{ backgroundColor: '#262A2C' }}
    >
      <div className="text flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white leading-tight">
          Let’s get know<br />about me closer
        </h2>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters, and web design.
        </p>
        <a
          href="#about"
          className="mt-6 inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-orange-500 transition duration-300"
        >
          Discover More About Me
        </a>
      </div>
      <div className="image flex-1 mt-10 md:mt-0">
        <img
          src="/images/image01.png"
          alt="profile_pic"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Profile;
