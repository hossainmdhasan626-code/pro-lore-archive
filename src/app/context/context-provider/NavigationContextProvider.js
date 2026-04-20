// This component was a context provider for NavigationContext .

"use client";

import { useState } from "react";
import { NavigationContext } from "../creatContext/NavigationContext";

const NavigationContextProvider = ({ children }) => {
  // Wht's should be inside the context . It's controlled by this state() .
  const [path, setPath] = useState({
    worldId: "",
    isSelected: false,
  });

  //   A fun() for meanipulate the context api data or the NavigationContextProvider
  // state() .
  const worldSelected = (data) => {
    setPath({
      worldId: data?.worldId || "",
      isSelected: data?.isSelected || false,
    });
  };
  return (
    // Now create a provider for this context api .
    <NavigationContext.Provider value={{ path, worldSelected }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
