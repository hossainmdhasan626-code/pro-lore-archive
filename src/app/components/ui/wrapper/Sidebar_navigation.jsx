// 

"use client";

import { useContext } from "react";
import Link from "next/link";
import { Navigation_context } from "@/app/context/creat_context/Navigation_context";
import EmptyState from "../EmptyState";

const Sidebar_navigation = ({ label }) => {
  const { path } = useContext(Navigation_context);

  const Nav_path = {
    Overview: "/",
    Characters: path?.world_id ? `/world/${path.world_id}/characters` : "#",
    Places: path?.world_id ? `/world/${path.world_id}/places` : "#",
    Timeline: path?.world_id ? `/world/${path.world_id}/timeline` : "#",
  };

 if (!path.is_selected) {
  return <EmptyState type="no-world" />;
}

  return (
    <Link
      href={Nav_path[label] || "#"}
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

export default Sidebar_navigation;
