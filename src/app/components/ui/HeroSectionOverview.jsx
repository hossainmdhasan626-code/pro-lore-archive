// This page was the hero section of the overview page .

import { worldsData } from "@/app/data/WorldsData";

const HeroSectionOverview = () => {
  // Data collect form main data .
  const worldData = worldsData;

  // Write a fun() which work was sum the total characters are added .
  // const totalCharacters = () => {
  //   // Create a blank variable
  //   let totalCha = 0;

  //   // Do a for loop for extract total characters .
  //   for (let index = 0; index < worldData.length; index++) {
  //     // Count the length of the characters arrow .
  //     const count = worldData[index]?.characters?.length;
  //     // Add count to totalCha .
  //     totalCha += count;
  //   }
  //   // Return the totalCha .
  //   return totalCha;
  // };

  // Extract total characters
  const totalCha = worldData?.reduce((acc, world) => {
    return acc + (world?.characters?.length || 0);
  }, 0);

  // Custom arrow for count section
  const data = [
    {
      id: 1,
      count: worldData?.length,
      label: "Worlds", // font-mono, text-text-metadata-muted
    },
    {
      id: 2,
      count: totalCha,
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

export default HeroSectionOverview;
