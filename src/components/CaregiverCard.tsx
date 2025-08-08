import React from 'react';

interface CaregiverCardProps {
  name: string;
  role: string;
  experience: number;
  imageUrl: string;
  specialties: string[];
}

const CaregiverCard: React.FC<CaregiverCardProps> = ({ 
  name, 
  role, 
  experience, 
  imageUrl, 
  specialties 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative pt-[75%]">
        <img 
          src={imageUrl} 
          alt={`${name}, ${role}`} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{role}</p>
        <p className="text-gray-500 mb-4">{experience} years of experience</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaregiverCard;