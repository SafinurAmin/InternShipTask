const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      {/* Centered "Get in Touch" */}
      <div className="text-center mb-8">
        <h2 className="text-orange-500 text-2xl font-bold mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-3xl font-bold underline underline-offset-4">
          info@aaronn.com
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo on the left */}
        <div className="flex-1 flex justify-start">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </div>

        {/* Address in the center */}
        <div className="flex-1 text-center">
          <p>Street Avenue 21, CA</p>
          <p>0-8-00-888-000</p>
        </div>

        {/* Social Media Icons on the right */}
        <div className="flex-1 flex justify-end gap-4">
          <a href="#" className="social-icon">
            <img src="/images/facebook.png" alt="Facebook" className="h-6" />
          </a>
          <a href="#" className="social-icon">
            <img src="/images/twitter.png" alt="Twitter" className="h-6" />
          </a>
          <a href="#" className="social-icon">
            <img src="/images/instagram.png" alt="Instagram" className="h-6" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm text-white-500">© 2023. Ideapeel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
