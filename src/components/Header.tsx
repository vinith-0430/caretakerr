import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">KareCare</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#caregivers" className="text-gray-700 hover:text-blue-600 transition-colors">Caregivers</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#request-care" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Request Care
            </a>
          </div>
          
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;