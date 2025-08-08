import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The caregiver assigned to my mother was incredibly skilled and compassionate. She made a difficult time so much easier for our family.",
      author: "Sandeep Kumar",
      relation: "Son of Patient",
      location: "Bangalore",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I was nervous about having someone help me after surgery, but my caregiver was professional and made me feel comfortable throughout my recovery.",
      author: "Anjali Hegde",
      relation: "Post-Surgery Patient",
      location: "Mysore",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Finding reliable care for my father was stressful until we discovered this service. Now we have peace of mind knowing he's in good hands.",
      author: "Vikram Desai",
      relation: "Family Member",
      location: "Mangalore",
      imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The hospital stay support was exceptional. Our caregiver coordinated with doctors, took detailed notes, and kept our family informed every step of the way.",
      author: "Meena Patel",
      relation: "Patient's Daughter",
      location: "Hubli",
      imageUrl: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Families Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from families who have experienced our compassionate care services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              relation={testimonial.relation}
              location={testimonial.location}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex space-x-2 items-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full ${
                  currentPage === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;