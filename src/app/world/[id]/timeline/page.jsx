// It's a dynamic page for timelines in tha application .

import TimelineEvent from "@/app/components/ui/TimelineEvent";
import DataGuard from "@/app/components/ui/reusable-component/DataGuard";
import HeaderSearchFiltaring from "@/app/components/ui/reusable-component/HeaderSearchFiltaring";
import { getWorldData } from "@/app/utils/dataQuery";

const page = async ({ params }) => {
  // Extract the id form params
  const { id } = await params;

  // Extract the worldData
  const worldData = getWorldData(id);

  // Extract the timeline_data
  const data = worldData?.timeline;

  // Filtar item
  const filtarItem = [
    {
      id: 0,
      label: "All",
      value: "all",
    },
    {
      id: 1,
      label: "War",
      value: "war",
    },
    {
      id: 2,
      label: "Political",
      value: "political",
    },
    {
      id: 3,
      label: "Arcane",
      value: "arcane",
    },
  ];

  return (
    <DataGuard data={worldData}>
      <div>
        {/* Header */}
        <HeaderSearchFiltaring
          headerContant={"Timeline"}
          filtarItem={filtarItem}
        />

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
