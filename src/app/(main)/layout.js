import React from "react";
import NavigationContextProvider from "../context/context-provider/NavigationContextProvider";
import Sidebar from "../components/shared/Sidebar";

const layout = ({children}) => {
  return (
    <>
      {/* Wrap the holl application with NavigationContextProvider */}
      <NavigationContextProvider>
        {/* Create a div rapper for sidebar and main containt */}
        <div className="flex min-h-screen w-full">
          {/* A div rapper for take the % of width for sidebar */}
          <div className="w-[13%] bg-card-sidebar-bg">
            {/* The sidebar component */}
            <Sidebar />
          </div>

          {/* A div rapper for take the % of width for maiin containt */}
          <div className="w-[87%]">
            {/* The main containt */}
            {children}
          </div>
        </div>
      </NavigationContextProvider>
    </>
  );
};

export default layout;
