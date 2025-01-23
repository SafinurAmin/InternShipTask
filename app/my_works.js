'use client';
import WorksGallery from '../components/WorksGallery';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MyWorks() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        <WorksGallery />
      </main>
      <Footer />
    </div>
  );
}
