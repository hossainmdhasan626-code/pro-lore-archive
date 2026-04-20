// src/app/world/[id]/timeline/page.jsx
import React from "react";
import EmptyState from "@/app/components/ui/EmptyState";
import { worldsData } from "@/app/data/WorldsData";
import TimelineEvent from "@/app/components/ui/TimelineEvent";

const page = async ({ params }) => {
  // Extract the id form params
  const { id } = await params;

  // Extract the world_data
  const world_data = worldsData?.find((itme) => itme?.id === id);

  // Extract the timeline_data
  const data = world_data?.timeline;

  // If no characters, timelines, or heroes have been recorded in this world thane
  // the EmptyState will be rendar .",
  if (
    (world_data?.characters?.length &&
      world_data?.places?.length &&
      world_data?.timeline.length) === 0
  ) {
    return <EmptyState type="no-data" />;
  }
  return (
    <div>
      {/* Header */}
      <div
        className=" w-full 
    px-3 py-6
    border border-gold-border-dim
    flex justify-between"
      >
        {/* Header text */}
        <div className="font-cinzel tracking-[0.2em] text-text-metadata-muted">
          All WORLD
        </div>
      </div>

      {/* Timeline list */}
      <div className="max-w-7xl mx-auto -space-y- py-10">
        {data?.map((item, index) => (
          <TimelineEvent
            key={index}
            year={item?.year}
            tag={item?.title}
            title={item?.title}
            description={item?.desc}
            // This is the logic for closing the stain on the last item.
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
