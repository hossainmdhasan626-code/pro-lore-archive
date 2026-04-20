// If no world is selected, the EmptySetate component will be rendered.

"use client";

import { NavigationContext } from "@/app/context/creatContext/NavigationContext";
import React, { useContext } from "react";
import EmptyState from "../EmptyState";

const SelectWorld = ({ children }) => {
  const { path } = useContext(NavigationContext);

  if (!path.isSelected) {
    return <EmptyState type="no-world" />;
  }

  return <>{children}</>;
};

export default SelectWorld;
