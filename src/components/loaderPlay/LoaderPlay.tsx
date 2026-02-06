import React from 'react';

const LoaderPlay = () => {
  return (
    <div className="flex items-end gap-[3px] h-8 w-fit p-2  rounded-md">
      
      <style jsx>{`
        @keyframes equalizer {
          0%, 100% { height: 8px; }
          50% { height: 20px; }
        }
        .animate-bar {
          animation: equalizer 0.8s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="w-[3px] bg-[#1db954] rounded-full animate-bar" 
        style={{ animationDelay: '-0.4s' }} 
      />
    
      <div 
        className="w-[3px] bg-[#1db954] rounded-full animate-bar" 
        style={{ animationDelay: '-0.2s' }} 
      />
      
      <div 
        className="w-[3px] bg-[#1db954] rounded-full animate-bar" 
        style={{ animationDelay: '-0.6s' }} 
      />
      
      <div 
        className="w-[3px] bg-[#1db954] rounded-full animate-bar" 
      />
    </div>
  );
};

export default LoaderPlay;