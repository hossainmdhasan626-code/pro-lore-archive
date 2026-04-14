// This component was the header navigation section

import React from "react";
import { NAV_ITEMS } from "../../../../data/Navigation_data";
import Link from "next/link";

const Navigation = () => {
  const data = NAV_ITEMS;

  return (
    <div
      className="w-[95%] h-auto
      mx-auto
    mt-25 "
    >
      {/* Title */}
      <p
        className="text-[12px] text-text-metadata-muted font-mono
      pl-5 bordar"
      >
        NAVIGATE
      </p>

      {/* A div rapper for rendar the navigation */}
      <div className="flex flex-col gap-1">
        {/* Do a map() on NAV_ITEMS */}
        {NAV_ITEMS?.map((item) => {
          return (
            <Link
              key={item?.id}
              href={"#"}
              className="
          group flex items-center justify-between
          px-5 py-3 
          font-crimson text-text-body-secondary hover:text-text-heading-primary
          hover:bg-interactive-hover-bg
          border border-transparent rounded-sm hover:border-nav-hover-border
          transition-all duration-300 ease-in-out
        "
            >
              {item?.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
