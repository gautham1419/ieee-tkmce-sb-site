import React, { useEffect, useState } from 'react';
import './Hero.css'; 

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative py-8 min-h-[435px] border-neutral-900 pb-4 lg:mb-35">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} text-7xl tracking-tight font-playfair bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent`}
        >
          EAT HEALTHY <br />
        </span>
        <span
          className={`transition-opacity duration-1000 ease-in-out delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} text-7xl tracking-tight font-playfair pl-18 bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent`}
        >
        </span>
        <p
          className={`transition-opacity duration-1000 ease-in-out delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} my-2 py-8 text-2xl font-semibold bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent text-center w-full`}
        >

        </p>
      </div>
    </div>
  );
};

export default Hero;
