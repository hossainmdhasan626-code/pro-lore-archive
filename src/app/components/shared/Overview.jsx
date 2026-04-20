// This was the landing page of tha application .

import HeroSectionOverview from "../ui/HeroSectionOverview";
import MainContaintOverview from "../ui/MainContaintOverview";
import OverviewHeader from "../ui/OverviewHeader";

const Overview = () => {
  return (
    <div
      className="w-full h-screen 
    bg-main-app-bg 
    flex flex-col 
    overflow-hidden"
    >
      {/* Header */}
      <div className="flex-none">
        <OverviewHeader />
      </div>

      {/* Hero section */}
      <div className="flex-none">
        <HeroSectionOverview />
      </div>

      {/* Main */}
      <div className="flex-1 overflow-y-auto mt-6 custom-scrollbar">
        <MainContaintOverview />
      </div>
    </div>
  );
};

export default Overview;
