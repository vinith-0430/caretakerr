import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  relation: string;
  location: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  relation, 
  location, 
  imageUrl 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 relative">
      <div className="text-blue-500 text-5xl absolute -top-4 left-6">"</div>
      <p className="text-gray-600 mb-6 pt-4 italic">{quote}</p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{relation}, {location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;