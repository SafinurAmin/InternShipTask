const Header = () => {
    return (
      <header className="bg-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="/images/logo.png" alt="Logo" className="h-10" />
          </div>
          <nav className="flex gap-6">
            <a href="#home" className="text-white font-bold">HOME</a>
            <a href="#about" className="text-white font-bold">ABOUT ME</a>
            <a href="/my_works" className="text-white font-bold hover:text-orange-500">MY WORKS</a>
            <a href="#contact" className="bg-white text-black py-2 px-4 rounded-full font-bold hover:bg-orange-500 hover:text-white">CONTACT</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  