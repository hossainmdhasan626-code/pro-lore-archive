// This component was the header of the sidebar

import Link from "next/link";
import React from "react";

const Sidebar_Header = () => {
  return (
    <div
      className="w-full
      px-3 py-6
      border-b border-gold-border-dim"
    >
      {/* Logo */}
      <div
        className="text-[15px] tracking-[0.15em] font-cinzel text-gold-accent-primary font-bold 
        flex justify-center items-center"
      >
        <Link href={"/"}>LORE ARCHIVE</Link>
      </div>
    </div>
  );
};

export default Sidebar_Header;
