import React from 'react';

const SectionTitle = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2  mb-3">
      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
        {icon && React.cloneElement(icon, { className: "text-white" })}
      </div>
      <h2 className="text-sm font-bold  ">{title}</h2>
    </div>
  );
};

export default SectionTitle;