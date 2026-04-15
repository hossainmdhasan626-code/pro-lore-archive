import React from "react";

const Main_containt_overview = () => {
  // Data for worlds/carts
  const worldsData = [
    {
      id: "w1",
      name: "AETHERMOOR",
      tags: "FANTASY · HIGH MAGIC",
      description:
        '"Where the veil between worlds grows thin, and forgotten gods still whisper in the dark."',
      stats: { characters: 24, places: 12, events: 36 },
      type: "fantasy",
    },
    {
      id: "w2",
      name: "THE DRIFT",
      tags: "SCI-FI · POST-COLLAPSE",
      description:
        '"Three hundred years after the Silence, humanity survives in orbital arks above a dying Earth."',
      stats: { characters: 18, places: 8, events: 22 },
      type: "sci-fi",
    },
    {
      id: "w3",
      name: "BELOW THE FOLD",
      tags: "HORROR · COSMIC",
      description:
        '"A small town in Vermont where the cartographers keep drawing maps that disagree with each other."',
      stats: { characters: 5, places: 4, events: 11 },
      type: "horror",
    },
    {
      id: "w4",
      name: "IRON HAVEN",
      tags: "STEAMPUNK · INDUSTRIAL",
      description:
        '"Steam-powered empires clash over the last remaining coal mines in the frozen North."',
      stats: { characters: 32, places: 15, events: 45 },
      type: "fantasy",
    },
    {
      id: "w5",
      name: "NEON SHADOW",
      tags: "CYBERPUNK · DYSTOPIAN",
      description:
        '"In the city of eternal rain, data is the only currency that matters."',
      stats: { characters: 50, places: 20, events: 100 },
      type: "sci-fi",
    },
    {
      id: "w6",
      name: "SILENT PEAK",
      tags: "MYSTERY · SUPERNATURAL",
      description:
        '"The fog never lifts from the mountain, and neither do the souls of those who climb it."',
      stats: { characters: 12, places: 6, events: 15 },
      type: "horror",
    },
    {
      id: "w7",
      name: "GOLDEN SANDS",
      tags: "ADVENTURE · ANCIENT",
      description:
        '"Hidden beneath the dunes lies a civilization that mastered the sun."',
      stats: { characters: 20, places: 10, events: 25 },
      type: "fantasy",
    },
    {
      id: "w8",
      name: "VOID SECTOR",
      tags: "SPACE OPERA · GALACTIC",
      description:
        '"At the edge of the galaxy, the stars are finally starting to go out."',
      stats: { characters: 40, places: 30, events: 80 },
      type: "sci-fi",
    },
    {
      id: "w9",
      name: "DARK WATER",
      tags: "GOTHIC · NAVAL",
      description:
        '"The ocean hides more than just shipwrecks; it hides a hunger."',
      stats: { characters: 15, places: 5, events: 18 },
      type: "horror",
    },
    {
      id: "w10",
      name: "SKY REACH",
      tags: "HIGH FANTASY · MAGIC",
      description: '"Floating islands connected by bridges of solid light."',
      stats: { characters: 28, places: 14, events: 42 },
      type: "fantasy",
    },
    {
      id: "w11",
      name: "COBALT PRIME",
      tags: "MECHA · MILITARY",
      description:
        '"Giant steel guardians are all that stand between the colonies and the swarm."',
      stats: { characters: 35, places: 12, events: 55 },
      type: "sci-fi",
    },
    {
      id: "w12",
      name: "BONE VALLEY",
      tags: "GRIMDARK · SURVIVAL",
      description:
        '"In a world made of dust, the only thing that grows is vengeance."',
      stats: { characters: 10, places: 3, events: 20 },
      type: "horror",
    },
    {
      id: "w13",
      name: "EMERALD ISLE",
      tags: "FOLKLORE · NATURE",
      description:
        '"The trees remember the names of everyone who has ever walked their paths."',
      stats: { characters: 18, places: 11, events: 24 },
      type: "fantasy",
    },
    {
      id: "w14",
      name: "OMEGA POINT",
      tags: "TRANSHUMAN · TECH",
      description: '"The line between man and machine has been deleted."',
      stats: { characters: 45, places: 18, events: 90 },
      type: "sci-fi",
    },
    {
      id: "w15",
      name: "WHISPER WOOD",
      tags: "ELDRITCH · FOREST",
      description: '"Don\'t close your eyes, the shadows here have teeth."',
      stats: { characters: 8, places: 5, events: 12 },
      type: "horror",
    },
  ];
  return (
    <div className="px-5 py-5
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {worldsData?.map((item) => {
        const topBorderColor =
          item.type === "fantasy"
            ? "border-t-gold-accent-primary"
            : item.type === "sci-fi"
              ? "border-t-category-places-teal"
              : "border-t-status-danger-red";

        return (
          <div
            key={item?.id}
            className={`w-full h-70 flex flex-col justify-between
          p-6 bg-card-sidebar-bg hover:bg-interactive-hover-bg transition-all
          border border-gold-border-dim border-t-2 ${topBorderColor} group cursor-pointer`}
          >
            <div>
              {/* Tags */}
              <p className="font-mono text-text-metadata-muted text-[10px] tracking-[0.15em] uppercase">
                {item?.tags}
              </p>

              {/* Title */}
              <p className="pt-3 font-cinzel text-text-heading-primary text-[18px] font-semibold truncate">
                {item?.name}
              </p>

              {/* Description with Line Clamp */}
              <p className="pt-2 font-crimson text-text-body-secondary text-[14px] italic leading-[1.6] line-clamp-3">
                {item?.description}
              </p>
            </div>

            {/* World details count */}
            <div className="flex gap-5 pt-4 border-t border-gold-border-dim/30">
              <div>
                <p className="font-mono text-text-heading-primary text-[12px] leading-none">
                  {item?.stats?.characters}
                </p>
                <p className="font-mono text-text-metadata-muted text-[11px] uppercase tracking-tighter">
                  chars
                </p>
              </div>
              <div>
                <p className="font-mono text-text-heading-primary text-[12px] leading-none">
                  {item?.stats?.places}
                </p>
                <p className="font-mono text-text-metadata-muted text-[11px] uppercase tracking-tighter">
                  places
                </p>
              </div>
              <div>
                <p className="font-mono text-text-heading-primary text-[12px] leading-none">
                  {item?.stats?.events}
                </p>
                <p className="font-mono text-text-metadata-muted text-[11px] uppercase tracking-tighter">
                  events
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main_containt_overview;
