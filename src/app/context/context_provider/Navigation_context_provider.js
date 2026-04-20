// This component was a context prvider for Navigation_context .

"use client";

import { useState } from "react";
import { Navigation_context } from "../creat_context/Navigation_context";

const Navigation_context_provider = ({ children }) => {
  // Wht's should be inside the context . It's controlled by this state() .
  const [path, setPath] = useState({
    world_id: "",
    is_selected: false,
  });

  //   A fun() for meanipulate the context api data or the Navigation_context_provider
  // state() .
  const worldSelected = (data) => {
    setPath({
      world_id: data?.world_id || "",
      is_selected: data?.is_selected || false,
    });
  };
  return (
    // Now create a provider for this context api .
    <Navigation_context.Provider value={{ path, worldSelected }}>
      {children}
    </Navigation_context.Provider>
  );
};

export default Navigation_context_provider;
