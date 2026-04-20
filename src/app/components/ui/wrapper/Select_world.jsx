// If no world is selected, the EmptySetate component will be rendered.

"use client";

import { Navigation_context } from "@/app/context/creat_context/Navigation_context";
import React, { useContext } from "react";
import EmptyState from "../EmptyState";

const Select_world = ({ children }) => {
  const { path } = useContext(Navigation_context);

  if (!path.is_selected) {
    return <EmptyState type="no-world" />;
  }

  return <>{children}</>;
};

export default Select_world;
