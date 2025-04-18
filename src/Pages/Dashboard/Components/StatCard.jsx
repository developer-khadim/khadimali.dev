const StatCard = ({ title, value, icon, change }) => {
  const isPositive = change && change.startsWith("+");

  return (
    <div
      className="relative flex flex-col text-sm dark:bg-gray-800 rounded-lg border-2 border-indigo-600 dark:text-white
          shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
          hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
          dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
          dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
          hover:border-indigo-700 dark:hover:border-indigo-500
         ease-in-out select-none p-4 hover:bg-gray-50 transition-colors duration-200 bg-white overflow-hidden"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 text-primary-500 dark:text-primary-400">
          {icon}
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {title}
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900 dark:text-white">
                {value}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
