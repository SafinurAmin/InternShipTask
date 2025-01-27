const Testimonial = () => {
  return (
    <section
      className="testimonial py-20"
      style={{ backgroundColor: '#262A2C' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="testimonial-text flex-1 md:ml-8">
          <h2 className="text-3xl font-bold text-white mb-4">Testimonial</h2>
          <blockquote className="text-lg italic text-gray-300 border-l-4 border-orange-500 pl-4">
            “Aaronn was fantastic to work with from start to finish. We were
            looking for a simple, stand-out logo and he delivered. I tried
            designing the logo myself thinking I wouldn’t need to pay the money
            for a professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was surprisingly affordable!
            I remember him saying simplicity is key to a successful logo and
            boy he was right. I can’t thank Aaronn enough for his effort and
            professionalism. I would recommend him to anyone looking for a
            design!”
          </blockquote>
          <p className="mt-4 text-orange-500 font-semibold">- Martin Lee</p>
        </div>
        <div className="testimonial-image flex-1">
          <img
            src="/images/inverted_comma.png"
            alt="Inverted Quote"
            className="w-20 h-20 mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
