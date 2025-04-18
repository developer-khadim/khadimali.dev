import React from 'react';

const SkillCategory = ({ title, icon, skills }) => {
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 3) {
    skillRows.push(skills.slice(i, i + 3));
  }

  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-indigo-600 dark:text-indigo-400">{icon}</span>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>

      <div className="flex flex-col gap-2">
        {skillRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/20"
              >
                <span className="text-indigo-600 dark:text-indigo-400">{skill.icon}</span>
                <span className="text-xs text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
