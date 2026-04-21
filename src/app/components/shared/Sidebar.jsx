// This Sedebar component was the main sidebar for hole application

import Navigation from "../ui/Navigation";
import NewEntrySidebar from "../ui/NewEntrySidebar";
import SidebarHeader from "../ui/SidebarHeader";

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
        <SidebarHeader />

        {/* Navigation */}
        <Navigation />
      </div>

      {/* Bottom Section */}
      <div>
        {/* New entry */}
        <NewEntrySidebar />
      </div>
    </div>
  );
};

export default Sidebar;
