import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900  z-[60]">
      <div className="relative inline-block w-[35px] h-[35px] animate-[spin78236_2s_infinite_linear]">
        <div className="absolute h-full w-[30%] bottom-[5%] left-0 [transform:rotate(60deg)_translate-x-[-50%]] [transform-origin:50%_85%]">
          <div className="absolute bottom-0 left-0 w-full pb-[100%] bg-[#5D3FD3] rounded-full animate-[wobble1_0.8s_infinite_ease-in-out_-0.24s]" />
        </div>
        <div className="absolute h-full w-[30%] bottom-[5%] right-0 [transform:rotate(-60deg)_translate-x-[50%]] [transform-origin:50%_85%]">
          <div className="absolute bottom-0 left-0 w-full pb-[100%] bg-[#5D3FD3] rounded-full animate-[wobble1_0.8s_infinite_ease-in-out_-0.12s]" />
        </div>
        <div className="absolute h-full w-[30%] bottom-[-5%] left-0 [transform:translateX(116.666%)]">
          <div className="absolute top-0 left-0 w-full pb-[100%] bg-[#5D3FD3] rounded-full animate-[wobble2_0.8s_infinite_ease-in-out]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;