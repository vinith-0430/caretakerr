import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 h-full">
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;