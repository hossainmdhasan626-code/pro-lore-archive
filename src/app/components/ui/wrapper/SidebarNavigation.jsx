"use client";

import Link from "next/link";
import EmptyState from "../EmptyState";
import useNavigationContext from "@/app/hooks/context/useNavigationContext";
import { usePathname } from "next/navigation";

const SidebarNavigation = ({ label, activePath }) => {
  // Extract current world by id .
  const { path } = useNavigationContext();

  // Extract current path
  const pathName = usePathname();

  const navPath = {
    Overview: "/",
    Characters: path?.worldId ? `/world/${path.worldId}/characters` : "#",
    Places: path?.worldId ? `/world/${path.worldId}/places` : "#",
    Timeline: path?.worldId ? `/world/${path.worldId}/timeline` : "#",
  };

  if (!path.isSelected) {
    return <EmptyState type="no-world" />;
  }

  let isActive = false;

  // Toggle isActive fot highlite the navigation in sidebar .
  if (activePath === "/") {
    // If current pathe was really home/"/" or not . If it was than toggle .
    isActive = pathName === "/";
  } else {
    // If activePath was in current path than toggle isActive .
    isActive = pathName.includes(activePath);
  }

  return (
    <Link
      href={navPath[label] || "#"}
      className={`group flex items-center justify-between px-5 py-3 font-crimson tracking-[0.12em] transition-all duration-400 ease-in-out rounded-sm border
    ${
      isActive
        ? "text-text-heading-primary bg-interactive-hover-bg border-nav-hover-border"
        : "text-text-body-secondary border-transparent hover:text-text-heading-primary hover:bg-interactive-hover-bg hover:border-nav-hover-border"
    }`}
    >
      {label}
    </Link>
  );
};

export default SidebarNavigation;
