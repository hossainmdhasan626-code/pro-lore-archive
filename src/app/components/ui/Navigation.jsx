// This component was the header navigation section

import SelectWorld from "./wrapper/SelectWorld";
import { navItems } from "@/app/data/NavigationData";
import SidebarNavigation from "./wrapper/SidebarNavigation";

const Navigation = () => {
  return (
    <div
      className="w-[95%] h-auto
      mx-auto
    mt-25 "
    >
      {/* Title */}
      <p
        className="text-[12px] text-text-metadata-muted font-mono
      pl-5 bordar"
      >
        NAVIGATE
      </p>

      {/* If no world is selected, the EmptySetate component will be rendered.
       */}
      <SelectWorld>
        {/* A div rapper for rendar the navigation */}
        <div className="flex flex-col gap-1">
          {/* Do a map() on navItems */}
          {navItems?.map((item) => {
            return (
              <SidebarNavigation
                key={item?.id}
                label={item?.label}
                activePath={item?.path}
              />
            );
          })}
        </div>
      </SelectWorld>
    </div>
  );
};

export default Navigation;
