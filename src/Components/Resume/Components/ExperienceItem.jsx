import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const ExperienceItem = ({ experience }) => {
  const { title, company, location, period, responsibilities } = experience;
  
  return (
    <div className="mb-4 bg-gray-50 p-2 rounded-xl hover:text-bg-gray-100  select-none ">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
        <h3 className="font-bold text-[16px] ">{title}</h3>
        <div className="flex items-center gap-1">
          <Calendar size={14} className="text-indigo-600 flex-shrink-0" />
          <span className="text-sm">{period}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <div className="flex items-center">
          <Briefcase size={14} className="text-indigo-600 mr-1 flex-shrink-0" />
          <span className="text-sm">{company}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={14} className="text-indigo-600 mr-1 flex-shrink-0" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
      <ul className="list-disc list-inside text-sm space-y-1 pl-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="break-words">{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;  