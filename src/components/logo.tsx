import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`text-2xl font-extrabold tracking-tight flex items-center gap-1 ${className}`}>
      <span className="text-white">PK</span>
      <span className="text-[#7B2EFF]">Creative</span>
    </div>
  );
};

export default Logo;
