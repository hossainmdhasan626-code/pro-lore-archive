// This Sedebar component was the main sidebar for hole application

import React from "react";
import Sidebar_Header from "../ui/Sidebar_Header";
import Navigation from "../ui/Navigation";
import New_entry_sidebar from "../ui/New_entry_sidebar";

const Sidebar = () => {
  return (
   <div className="
      w-full h-screen 
      bg-card-sidebar-bg 
      flex flex-col justify-between 
      pb-6
    ">
      {/* Top Section */}
      <div>
        {/* Sidebar Header */}
        <Sidebar_Header />

        {/* Navigation */}
        <Navigation />
      </div>

      {/* Bottom Section */}
      <div>
        {/* New entry */}
        <New_entry_sidebar />
      </div>
    </div>
  );
};

export default Sidebar;
