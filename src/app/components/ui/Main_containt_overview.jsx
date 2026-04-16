import React from "react";

const Main_containt_overview = async () => {
  // fetch data form custom api
  const res = await fetch("http://localhost:3000/api/worlds", {
    next: { revalidate: 3600 },
  });

  // Convart res
  const data = await res.json();

  return (
    <div
      className="px-5 py-5
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {data?.map((item) => {
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
