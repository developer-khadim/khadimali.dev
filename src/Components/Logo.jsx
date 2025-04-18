const Logo = () => {
  return (
      <a
          href="#home"
          className="p-0.5 rounded-sm border-2 border-indigo-600 dark:border-gray-500 
              shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] 
              dark:shadow-[3px_3px_0px_0px_rgba(107,114,128,0.9)] 
              dark:hover:shadow-[5px_5px_0px_0px_rgba(107,114,128,1)]
              hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)]
              transition-shadow duration-200"
          aria-label="Go to home section"
      >
          <span className="flex gap-1.5 text-sm font-bold text-indigo-700 dark:text-gray-300 select-none py-1.5 px-2">
              <span>{"{"}</span>
              <span className="relative top-[-2px] sm:top-[2px]">KHADIM.DEV</span>
              <span>{"}"}</span>
          </span>
      </a>
  );
};

export default Logo;