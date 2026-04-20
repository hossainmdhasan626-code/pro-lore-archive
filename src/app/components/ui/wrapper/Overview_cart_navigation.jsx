"use client";

import { Navigation_context } from "@/app/context/creat_context/Navigation_context";
import Link from "next/link";
import React, { useContext } from "react";

const Overview_cart_navigation = ({ children, topBorderColor, id }) => {
  const { worldSelected } = useContext(Navigation_context);

  return (
    <Link
      href={`world/${id}`}
      onClick={() =>
        worldSelected({
          world_id: id,
          is_selected: true,
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

export default Overview_cart_navigation;
