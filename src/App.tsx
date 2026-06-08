import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Chatbot from './components/Chatbot';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-background font-sans text-text-main">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Programs />
            <Testimonials />
            <Pricing />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : (
          <ContactPage />
        )}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <Chatbot />
    </div>
  );
}
