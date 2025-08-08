import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Caregivers from './components/Caregivers';
import Testimonials from './components/Testimonials';
import RequestForm from './components/RequestForm';
import LocationsServed from './components/LocationsServed';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "KareCare - Compassionate Caregiving Services in Karnataka";
    
    // You could add more initialization logic here
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <Services />
        <Caregivers />
        <Testimonials />
        <RequestForm />
        <LocationsServed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;