import React from "react";

const ActivityItem = ({ title, description, time }) => {
  return (
    <li className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
            {title}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{time}</div>
      </div>
    </li>
  );
};

export default ActivityItem;
