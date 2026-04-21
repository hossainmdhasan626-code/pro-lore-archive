import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <div
        className=" w-full 
    px-3 py-6
    border border-gold-border-dim
    flex justify-between"
      >
        {/* Header text */}
        <Link href={"/"} className="font-cinzel tracking-[0.2em] text-text-metadata-muted">
          New Entry
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
