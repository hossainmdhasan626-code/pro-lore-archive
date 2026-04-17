// It's was a daynamic page for world overview .

import { worldsData } from "@/app/data/WorldsData";
import Link from "next/link";
import React, { lazy } from "react";

const page = async ({ params }) => {
  // Collect the world id form params .
  const { id } = await params;

  // Fine this particular world data by useing id .
  const data = worldsData.find((item) => item?.id === id);

  // Create a arrow with the data for world section
  const world_details = [
    {
      id: 1,
      label: "Gener",
      value: data?.details?.genre,
    },
    {
      id: 2,
      label: "Magic",
      value: data?.details?.magic,
    },
    {
      id: 3,
      label: "Era",
      value: data?.details?.era,
    },
    {
      id: 4,
      label: "Characters",
      value: data?.characters?.length,
    },
    {
      id: 5,
      label: "Places",
      value: data?.places?.length,
    },
    {
      id: 6,
      label: "Timeline Events",
      value: data?.timeline?.length,
    },
  ];

  //   Create a arrow for main content .
  const main_content = [
    {
      id: 1,
      label: "CHARACTERS",
      value: `${data?.characters?.length} entries . /characters`,
    },
    {
      id: 2,
      label: "PLACES",
      value: `${data?.places?.length} entries . /places`,
    },
    {
      id: 3,
      label: "TIMELINE",
      value: `${data?.timeline.length} events . /timeline`,
    },
    {
      id: 4,
      label: "FACTIONS",
      value: `${0} entries . /factions`,
    },
  ];
  return (
    <div>
      {/* Header */}
      <div
        className=" w-full 
    px-3 py-6
    border border-gold-border-dim"
      >
        {/* Header text */}
        <div className="font-cinzel tracking-[0.2em] text-text-metadata-muted">
          WORLD OVERVIEW
        </div>
      </div>

      {/* Hero section */}
      <div
        className="flex justify-between
      pt-13  px-10"
      >
        {/* Content/text */}
        <div>
          <p className="font-mono text-gold-accent-primary tracking-[0.2em] text-[12px] uppercase">
            WORLD . {data?.name}
          </p>
          <p
            className="pt-4
        font-cinzel text-text-heading-primary text-[40px] font-semibold leading-tight"
          >
            The world of <br /> {data?.name}
          </p>
          <p
            className="pt-5
        font-crimson text-text-body-secondary text-[18px] leading-[1.7] italic"
            // HTML codverted to text .
            dangerouslySetInnerHTML={{ __html: data?.details?.fullStory }}
          />
        </div>

        {/* World details */}
        <div
          className="w-95 h-auto
        p-8
        bg-card-sidebar-bg
        border border-gold-border-dim
        "
        >
          {world_details.map((items) => {
            return (
              <div key={items?.id}>
                <div
                  className="flex justify-between
              py-4"
                >
                  {/* label */}
                  <div className="font-mono text-text-metadata-muted tracking-wider">
                    {items?.label}
                  </div>

                  {/* value */}
                  <div className="font-cinzel text-white">{items?.value}</div>
                </div>

                {/* Horizontal line */}
                <div className="border border-gold-border-dim"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A horizontal line on hero section bottom */}
      <div
        className="mt-10
      border-t border-gold-border-dim"
      ></div>

      {/* Main content */}
      <div className="grid grid-cols-2 gap-6 p-10 ">
        {/* Do a map() on main_content */}
        {main_content?.map((item) => {
          return (
            <Link
              href={"#"}
              key={item?.id}
              className="p-6
              rounded-md
          bg-card-sidebar-bg 
          hover:bg-interactive-hover-bg transition-all
          border border-gold-border-dim
          flex flex-col gap-2 group cursor-pointer
        "
            >
              <p className="font-cinzel text-gold-accent-primary text-[14px] tracking-widest group-hover:text-white">
                {item?.label}
              </p>

              <p className="font-mono text-text-metadata-muted text-[12px] uppercase">
                {item?.value}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
