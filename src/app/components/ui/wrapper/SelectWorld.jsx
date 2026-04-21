// If no world is selected, the EmptySetate component will be rendered.

"use client";

import EmptyState from "../EmptyState";
import useNavigationContext from "@/app/hooks/context/useNavigationContext";

const SelectWorld = ({ children }) => {
  const { path } = useNavigationContext();

  if (!path.isSelected) {
    return <EmptyState type="no-world" />;
  }

  return <>{children}</>;
};

export default SelectWorld;
