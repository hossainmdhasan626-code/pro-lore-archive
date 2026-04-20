// This page was the character daynamic page .

"use server";
import EmptyState from "@/app/components/ui/EmptyState";
import Header_search_filtaring from "@/app/components/ui/reusable_component/Header_search_filtaring";
import { worldsData } from "@/app/data/WorldsData";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  // Extract id form params .
  const { id } = await params;

  //  Now extract character details . By useing id which was come by params .
  const data = worldsData?.find((item) => item?.id === id);

  const filtar_arrow = [
    { id: 1, value: "all", label: "All" },
    { id: 2, value: "hero", label: "Hero" },
    { id: 3, value: "villain", label: "Villain" },
    { id: 4, value: "npc", label: "NPC" },
  ];

  // If no characters, timelines, or heroes have been recorded in this world thane
  // the EmptyState will be rendar .",
  if (
    (data?.characters?.length &&
      data?.places?.length &&
      data?.timeline.length) === 0
  ) {
    return <EmptyState type="no-data" />;
  }
  return (
    <div>
      {/* Header */}
      <Header_search_filtaring
        header_contant={"CHARACTERRS"}
        filtar_item={filtar_arrow}
      />

      {/* Main section */}
      {/* Main section in world/[id]/characters/page.js */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.characters?.map((item) => {
          return (
            <Link
              key={item?.id}
              href={`/world/${id}/characters/${item?.id}`} // ক্যারেক্টার ডিটেইলস এর জন্য
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
  );
};

export default page;
