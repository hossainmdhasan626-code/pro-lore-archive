// This page was the character daynamic page .

import { worldsData } from "@/app/data/WorldsData";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  // Extract id form params .
  const { id } = await params;

  //  Now extract character details . By useing id which was come by params .
  const data = worldsData?.find((item) => item?.id === id);

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
          CHARACTERS
        </div>

        {/* Search bar */}
        <div className="w-72">
          <input
            type="text"
            placeholder="Search characters..."
            className="
      w-full px-4 py-2.5
      bg-interactive-hover-bg [cite: 38, 59]
      font-crimson 
      text-text-heading-primary [cite: 42, 63, 143]
      text-[14px] [cite: 143]
      placeholder:text-text-metadata-muted [cite: 42, 65]  
      border border-gold-border-dim 
      rounded-[3px]  
      focus:outline-none 
      focus:border-gold-accent-primary 
      transition-all duration-300
    "
          />
        </div>
      </div>

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
