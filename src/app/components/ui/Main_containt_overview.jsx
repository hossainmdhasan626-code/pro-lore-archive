import { worldsData } from "@/app/data/WorldsData";
import Overview_cart_navigation from "./wrapper/Overview_cart_navigation";

const Main_containt_overview = () => {
  /* NOTE: Originally I implemented data fetching via Custom API (SSR/ISR).
     Due to build-time restrictions (ECONNREFUSED) on static hosting, 
     I am currently using direct data injection for SSG performance.
     The API route is still available at /api/worlds for reference.
  */

  // const res = await fetch(`${baseUrl}/api/worlds`); // Commented for build safety
  const data = worldsData;

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
          <Overview_cart_navigation
            key={item?.id}
            id={item?.id}
            topBorderColor={topBorderColor}
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
                  {item?.characters?.length}
                </p>
                <p className="font-mono text-text-metadata-muted text-[11px] uppercase tracking-tighter">
                  chars
                </p>
              </div>
              <div>
                <p className="font-mono text-text-heading-primary text-[12px] leading-none">
                  {item?.places?.length}
                </p>
                <p className="font-mono text-text-metadata-muted text-[11px] uppercase tracking-tighter">
                  places
                </p>
              </div>
              <div>
                <p className="font-mono text-text-heading-primary text-[12px] leading-none">
                  {item?.timeline.length}
                </p>
                <p className="font-mono text-text-metadata-muted text-[11px] uppercase tracking-tighter">
                  events
                </p>
              </div>
            </div>
          </Overview_cart_navigation>
        );
      })}
    </div>
  );
};

export default Main_containt_overview;
