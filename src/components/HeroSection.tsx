import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-40 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Compassionate Care
              <span className="block text-blue-600">When You Need It Most</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              KareCare connects you with trained, compassionate caregivers across Karnataka 
              to provide the support you need during hospital stays, recovery, or daily assistance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#request-care" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center sm:justify-start"
              >
                Request a Caregiver
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center sm:justify-start"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Caregiver helping elderly patient" 
              className="rounded-lg shadow-xl relative z-10 w-full h-auto max-w-md mx-auto"
            />
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-blue-100 rounded-full z-0 hidden lg:block"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-amber-100 rounded-full z-0 hidden lg:block"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;