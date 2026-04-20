// This component was the header navigation section

// "use client";

import React, { useContext } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/app/data/Navigation_data";
// import { Navigation_context } from "@/app/context/creat_context/Navigation_context";
import { worldsData } from "@/app/data/WorldsData";
import Extract_Navigation_context from "../custom/Sidebar_navigation";
import Sidebar_navigation from "../custom/Sidebar_navigation";

const Navigation = () => {
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
          return <Sidebar_navigation key={item?.id} label={item?.label} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
