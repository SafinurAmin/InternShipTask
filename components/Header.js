import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#262A2C] py-4">
      <div className="container mx-auto flex justify-between items-left">
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-white font-bold">HOME</Link>
          <Link href="/About" className="text-white font-bold">ABOUT ME</Link>
          <Link href="/portfolio" className="text-white font-bold">MY WORKS</Link>

          <Link href="/Contact" className="bg-white text-black py-2 px-4 rounded-full font-bold hover:bg-orange-500 hover:text-white">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
