import React from 'react';
import CaregiverCard from './CaregiverCard';

const Caregivers = () => {
  const caregivers = [
    {
      name: 'Priya Sharma',
      role: 'Senior Caregiver',
      experience: 8,
      imageUrl: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Elderly Care', 'Post-Surgery', 'Medication Management']
    },
    {
      name: 'Rahul Patil',
      role: 'Hospital Care Specialist',
      experience: 6,
      imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Hospital Assistance', 'Patient Advocacy', 'Medical Coordination']
    },
    {
      name: 'Lakshmi Rao',
      role: 'Home Care Provider',
      experience: 5,
      imageUrl: 'https://images.pexels.com/photos/6957646/pexels-photo-6957646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Home Recovery', 'Elderly Support', 'Companionship']
    },
    {
      name: 'Amar Singh',
      role: 'Rehabilitation Aide',
      experience: 7,
      imageUrl: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Physical Therapy', 'Post-Surgery', 'Mobility Support']
    }
  ];

  return (
    <section id="caregivers" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Experienced Caregivers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of compassionate, trained professionals dedicated to providing exceptional care with dignity and respect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {caregivers.map((caregiver, index) => (
            <CaregiverCard 
              key={index}
              name={caregiver.name}
              role={caregiver.role}
              experience={caregiver.experience}
              imageUrl={caregiver.imageUrl}
              specialties={caregiver.specialties}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#request-care" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Connect with a Caregiver
          </a>
        </div>
      </div>
    </section>
  );
};

export default Caregivers;