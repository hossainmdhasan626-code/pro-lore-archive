"use client";

import useNavigationContext from "@/app/hooks/context/useNavigationContext";
import Link from "next/link";

const OverviewCartNavigation = ({ children, topBorderColor, id }) => {
  const { worldSelected } = useNavigationContext();

  return (
    <Link
      href={`world/${id}`}
      onClick={() =>
        worldSelected({
          worldId: id,
          isSelected: true,
        })
      }
      className={`w-full h-70 flex flex-col justify-between
          p-6 bg-card-sidebar-bg hover:bg-interactive-hover-bg transition-all
          border border-gold-border-dim border-t-2 ${topBorderColor} group cursor-pointer`}
    >
      {children}
    </Link>
  );
};

export default OverviewCartNavigation;
