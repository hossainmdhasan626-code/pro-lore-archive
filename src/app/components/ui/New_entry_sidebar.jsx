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
        text-[11px] tracking-[0.12em] font-cinzel text-gold-accent-primary hover:text-gold-accent-hover
        bg-card-sidebar-bg hover:bg-interactive-hover-bg
        border border-gold-border-dim hover:border-gold-accent-primary rounded-[3px]
        transition-all duration-300 cursor-pointer uppercase tracking-widest"
      >
        <Link href={"#"} className="flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
          </svg>{" "}
          NEW ENTRY
        </Link>
      </div>
    </div>
  );
};

export default New_entry_sidebar;
