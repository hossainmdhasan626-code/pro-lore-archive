// This page was daynamic page for places .

import Header_search_filtaring from "@/app/components/reusable_component/Header_search_filtaring";
import { worldsData } from "@/app/data/WorldsData";
import React from "react";

const page = async ({ params }) => {
  // Extract world id and place id form params .
  const { id } = await params;

  // Extract the world data using id
  const world_data = worldsData?.find((item) => item?.id === id);

  // Extract the places arrow form world_data
  const places = world_data?.places;

  //   Filtar arror
  const filtar_arrow = [
    { id: 1, label: "All", value: "all" },
    { id: 2, label: "City", value: "city" },
    { id: 3, label: "Ruin", value: "ruin" },
    { id: 4, label: "Wilderness", value: "Wilderness" },
  ];

  return (
    <div>
      {/* Header */}
      <Header_search_filtaring
        header_contant={"PLACES"}
        filtar_item={filtar_arrow}
      />

      {/* Main content */}
      <div className="grid grid-cols-4 gap-10  p-10">
        {places?.map((itme) => {
          return (
            <div
              key={itme?.id}
              className="w-90 h-auto 
              p-5 
              flex flex-col gap-3
              bg-card-sidebar-bg hover:bg-interactive-hover-bg
                border border-gold-border-dim hover:border-gold-accent-hover transition duration-500 rounded-lg"
            >
              {/* Currently i don't use any img/map but in future i will use a img or map . 
                    But now i just rendar a card with details  */}

              {/* City detail */}
              <div className="flex 
              font-mono tracking-[0.2em] text-text-metadata-muted text-[16px]">
                {/* City type */}
                <p>{itme?.type}</p>
                <p className="px-3">.</p>
                {/* City subtype */}
                <p>{itme?.subtype}</p>
              </div>

              {/* City name */}
              <div className="font-cinzel text-white text-[18px] ">
                {itme?.name}
              </div>

              {/* City description */}
              <div className="font-crimson italic text-text-metadata-muted text-[16px]">
                {itme?.description || ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
