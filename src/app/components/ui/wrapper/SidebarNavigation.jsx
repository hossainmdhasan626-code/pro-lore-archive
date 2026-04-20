//

"use client";

import { useContext } from "react";
import Link from "next/link";
import { NavigationContext } from "@/app/context/creatContext/NavigationContext";
import EmptyState from "../EmptyState";

const SidebarNavigation = ({ label }) => {
  const { path } = useContext(NavigationContext);

  const navPath = {
    Overview: "/",
    Characters: path?.worldId ? `/world/${path.worldId}/characters` : "#",
    Places: path?.worldId ? `/world/${path.worldId}/places` : "#",
    Timeline: path?.worldId ? `/world/${path.worldId}/timeline` : "#",
  };

  if (!path.isSelected) {
    return <EmptyState type="no-world" />;
  }

  return (
    <Link
      href={navPath[label] || "#"}
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
      {label}
    </Link>
  );
};

export default SidebarNavigation;
