'use client'
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WorksGallery from '../components/WorksGallery';

export default function Home() {
  return (
    <div className="text-white" style={{ background: 'var(--background)' }}>
      <Header />
      <Hero />
      <Profile />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
};