// Thise  component was the overview page header with a search bar

import React from "react";

const Overview_Header = () => {
  return (
    <div className=" w-full 
    px-3 py-6
    border border-gold-border-dim
    flex justify-between">
      {/* Header text */}
      <div className="font-cinzel tracking-[0.2em] text-text-body-secondary">
        All WORLD
      </div>

      {/* Search bar */}
      <div className="w-72">
        <input
          type="text"
          placeholder="Search characters..."
          className="
      w-full px-4 py-2.5
      bg-interactive-hover-bg [cite: 38, 59]
      font-crimson 
      text-text-heading-primary [cite: 42, 63, 143]
      text-[14px] [cite: 143]
      placeholder:text-text-metadata-muted [cite: 42, 65]  
      border border-gold-border-dim 
      rounded-[3px]  
      focus:outline-none 
      focus:border-gold-accent-primary 
      transition-all duration-300
    "
        />
      </div>
    </div>
  );
};

export default Overview_Header;
