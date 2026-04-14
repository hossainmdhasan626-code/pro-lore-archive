// This component works was add new data

import Link from "next/link";
import React from "react";

const New_entry_sidebar = () => {
  return (
    <div
      className="w-full 
      border-t border-gold-border-dim
      pt-4" 
    >
      {/* Label / Button */}
      <div
        className="w-[95%]
        mx-auto py-3
        text-sm font-cinzel text-gold-accent-primary hover:text-gold-accent-hover
        bg-card-sidebar-bg hover:bg-interactive-hover-bg
        border border-gold-border-dim hover:border-gold-accent-primary rounded-[3px]
        transition-all duration-300 cursor-pointer uppercase tracking-widest"
      >
        <Link href={"#"}>NEW ENTRY</Link>
      </div>
    </div>
  );
};

export default New_entry_sidebar;
