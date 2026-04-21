// It's a dynamic page for timelines in tha application .

import TimelineEvent from "@/app/components/ui/TimelineEvent";
import DataGuard from "@/app/components/ui/reusable-component/DataGuard";
import { getWorldData } from "@/app/utils/dataQuery";

const page = async ({ params }) => {
  // Extract the id form params
  const { id } = await params;

  // Extract the worldData
  const worldData = getWorldData(id);

  // Extract the timeline_data
  const data = worldData?.timeline;

  return (
    <DataGuard data={worldData}>
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
    </DataGuard>
  );
};

export default page;
