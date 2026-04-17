// Thise page was the hero section of the overview page .

import { worldsData } from "@/app/data/WorldsData";
import React from "react";

const Hero_section_overview = () => {
  // Data collect form main data .
  const world_data = worldsData;

  // Write a fun() which work was sum the total characters are added .
  // const total_characters = () => {
  //   // Create a blank variable
  //   let total_cha = 0;

  //   // Do a for loop for extract total characters .
  //   for (let index = 0; index < world_data.length; index++) {
  //     // Count the length of the characters arrow .
  //     const count = world_data[index]?.characters?.length;
  //     // Add count to total_cha .
  //     total_cha += count;
  //   }
  //   // Return the total_Cha .
  //   return total_cha;
  // };

  // Extract total characters
  const total_cha = world_data?.reduce((acc,world ) => {
    return acc + world?.characters?.length;
  },0);

  // Custom arrow for count section
  const data = [
    {
      id: 1,
      count: world_data?.length,
      label: "Worlds", // font-mono, text-text-metadata-muted
    },
    {
      id: 2,
      count: total_cha,
      label: "CHARACTERS", // font-mono, text-text-metadata-muted
    },
  ];

  return (
    <div className="relative">
      <div className=" pt-13  pl-10">
        {/* Hero section text/content */}
        <div>
          <p className="font-mono text-gold-accent-primary tracking-[0.2em] text-[12px] uppercase">
            YOUR FICTIONAL ENCYCLOPEDIA
          </p>
          <p
            className="pt-4
        font-cinzel text-text-heading-primary text-[40px] font-semibold leading-tight"
          >
            EVERY WORLD <br /> DESERVES A{" "}
            <span className="text-gold-accent-hover">RECORD.</span>
          </p>
          <p
            className="pt-5
        font-crimson text-text-body-secondary text-[18px] leading-[1.7] italic"
          >
            Build, explore, and connect the lore of worlds that exist only in
            your <br />
            imagination.
          </p>
        </div>

        {/* Watermark  */}
        <div
          className="absolute -top-18.5 -right-1.5 -z-10
      font-cinzel text-gold-accent-primary opacity-[0.03] text-[210px] font-black"
        >
          LORE
        </div>

        {/* Count details */}
        <div className="flex gap-10 pt-12">
          {/* Do a map on the count data */}
          {data?.map((items) => {
            return (
              <div key={items?.id}>
                {/* Count status */}
                <p className="font-cinzel text-gold-accent-primary text-[28px] font-semibold">
                  {items?.count}
                </p>

                {/* Count label */}
                <p className="font-mono text-text-metadata-muted text-[12px] tracking-widest uppercase ">
                  {items?.label}
                </p>
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
    </div>
  );
};

export default Hero_section_overview;
