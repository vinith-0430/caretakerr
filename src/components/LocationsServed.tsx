import React from 'react';
import { MapPin } from 'lucide-react';

const LocationsServed = () => {
  const cities = [
    'Bangalore', 'Mysore', 'Mangalore', 'Hubli-Dharwad', 
    'Belgaum', 'Davangere', 'Bellary', 'Shimoga', 
    'Tumkur', 'Udupi', 'Gulbarga', 'Bijapur'
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Areas We Serve in Karnataka</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our compassionate caregivers are available throughout Karnataka to provide the care you need.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <MapPin className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don't see your area listed? <a href="#contact" className="text-blue-600 hover:underline">Contact us</a> to check for service availability in your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsServed;