
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">

    <h1 className='text-blue-400 font-black'>hello</h1>
      {/* <Header /> */}
      <Header/>
      <Hero />
      <Profile />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

