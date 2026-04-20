// This component was the header navigation section

"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/app/data/Navigation_data";
import { Navigation_context } from "@/app/context/creat_context/Navigation_context";
import { worldsData } from "@/app/data/WorldsData";

const Navigation = () => {
  // Extract data form Navigation_context
  const { path } = useContext(Navigation_context);

  // Extract the world data .
  const world_data = worldsData?.find((item) => item?.id === path?.world_id);

  // Navbar items .
  const data = NAV_ITEMS;

  const Nav_path = {
    Overview: "/",
    Characters: `/world/${world_data?.id}/characters`,
    Places: `/world/${world_data?.id}/places`,
    Timeline: `/world/${world_data?.id}/timeline`,
  };

  console.log("Current context data:", path)

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
              href={Nav_path[item?.label]}
              className="
          group flex items-center justify-between
          px-5 py-3 
          font-crimson tracking-[0.12em] text-text-body-secondary 
          hover:text-text-heading-primary
          hover:bg-interactive-hover-bg
          hover:border-nav-hover-border
          border border-transparent rounded-sm 
          transition-all duration-500 ease-in-out
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
