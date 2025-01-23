const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-8">
        <div className="footer-top text-center mb-8">
          <h2 className="text-orange-500 text-2xl font-bold">Get in Touch With Us</h2>
          <p className="text-lg mt-2">info@aaronn.com</p>
        </div>
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="footer-logo mb-4 md:mb-0">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="footer-address text-center md:text-left">
            <p>Street Avenue 21, CA</p>
            <p>0-8-00-888-000</p>
          </div>
          <div className="footer-socials flex gap-4 mt-4 md:mt-0">
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
      </footer>
    );
  };
  
  export default Footer;
  