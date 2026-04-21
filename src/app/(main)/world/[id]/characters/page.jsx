// This page was the character daynamic page .

import DataGuard from "@/app/components/ui/reusable-component/DataGuard";
import HeaderSearchFiltaring from "@/app/components/ui/reusable-component/HeaderSearchFiltaring";
import { getWorldData } from "@/app/utils/dataQuery";
import Link from "next/link";

const page = async ({ params }) => {
  // Extract id form params .
  const { id } = await params;

  //  Now extract character details . By useing id which was come by params .
  const data = getWorldData(id);

  const filtarArrow = [
    { id: 1, value: "all", label: "All" },
    { id: 2, value: "hero", label: "Hero" },
    { id: 3, value: "villain", label: "Villain" },
    { id: 4, value: "npc", label: "NPC" },
  ];


  return (
    <DataGuard data={data}>
      <div>
        {/* Header */}
        <HeaderSearchFiltaring
          headerContant={"CHARACTERRS"}
          filtarItem={filtarArrow}
        />

        {/* Main section */}
        {/* Main section in world/[id]/characters/page.js */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.characters?.map((item) => {
            return (
              <Link
                key={item?.id}
                href={`/world/${id}/characters/${item?.id}`} 
                className="p-6 
              bg-interactive-hover-bg 
              border-2 border-gold-border-dim hover:border-gold-accent-hover rounded-sm 
              transition-colors duration-600 group"
              >
                {/* Profile Circle with Initial */}
                <div
                  className="w-12 h-12 
              flex justify-center items-center 
              border border-gold-accent-primary rounded-full group-hover:border-gold-accent-hover
              mb-4"
                >
                  <span
                    className="font-cinzel 
                text-white  text-xl"
                  >
                    {item?.initial}
                  </span>
                </div>

                {/* Name */}
                <p
                  className="font-cinzel 
              mb-1
              text-white text-lg uppercase tracking-wide"
                >
                  {item?.name}
                </p>

                {/* Title */}
                <p
                  className="mb-4
              font-crimson text-text-metadata-muted italic text-sm"
                >
                  {item?.title}
                </p>

                {/* Roles/Tags */}
                <div
                  className="flex gap-2 
              mt-auto "
                >
                  <span
                    className="px-3 py-1 
                text-[10px] font-mono uppercase
                border border-gold-dim text-gold-dim  tracking-tighter 
                bg-black/30"
                  >
                    {item?.role}
                  </span>
                  <span
                    className="px-3 py-1 
                text-[10px] font-mono border uppercase tracking-tighte
                border-gold-dim text-gold-dim r 
                bg-black/30"
                  >
                    {item?.class}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DataGuard>
  );
};

export default page;
