import React from 'react';
import { Guitar as Hospital, Home, Heart, Activity, Clock, BabyIcon } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Hospital,
      title: 'Hospital Assistance',
      description: 'Dedicated support during hospital stays, including monitoring, companionship, and coordinating with medical staff.'
    },
    {
      icon: Home,
      title: 'Home Recovery Support',
      description: 'Professional care for post-surgery recovery, medication management, and daily living assistance at home.'
    },
    {
      icon: Heart,
      title: 'Elderly Care',
      description: 'Compassionate companionship and personal care for seniors, including mobility assistance and emotional support.'
    },
    {
      icon: Activity,
      title: 'Medical Accompaniment',
      description: 'Reliable accompaniment to doctor visits, therapy sessions, and medical appointments with detailed note-taking.'
    },
    {
      icon: Clock,
      title: 'Respite Care',
      description: 'Short-term relief for primary caregivers, providing temporary care with the same level of attention and compassion.'
    },
    {
      icon: BabyIcon,
      title: 'Post-natal Care',
      description: 'Specialized support for new mothers and babies, including feeding assistance, light housekeeping, and emotional support.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Caregiving Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of caregiving services tailored to meet your unique needs with compassion and professionalism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;