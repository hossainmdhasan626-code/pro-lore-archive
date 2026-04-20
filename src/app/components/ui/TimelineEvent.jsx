// src/app/components/ui/TimelineEvent.jsx
import React from "react";

const TimelineEvent = ({ year, tag, title, description, isLast = false }) => {
  const tagColorClass =
    tag === "ARCANE"
      ? "text-purple-accent-light"
      : tag === "WAR"
        ? "text-status-danger-red"
        : "text-category-places-teal";

  return (
    // This div is the main container.
    <div className="flex gap-10 group relative">
      {/* Year on the left side (Year Section)  */}
      <div className="w-16 pt-1 text-right">
        <p className="font-mono text-xs text-text-metadata-muted tracking-wide">
          {year}
        </p>
      </div>

      {/* The Line & Dot Section */}
      <div className="w-1 group-last:after:hidden relative flex flex-col items-center">
        {/* Dot */}
        <div className="absolute top-2 w-2.5 h-2.5 rounded-full border border-gold-border-dim bg-main-app-bg group-hover:border-gold-accent-primary group-hover:bg-gold-accent-primary/20 transition-all duration-300"></div>

        {/* The vertical line */}
        {/* Checking with 'isLast' props whether this is the last item or not, then there will be no stain */}
        {!isLast && (
          <div className="w-px h-full bg-gold-border-dim opacity-30 mt-6"></div>
        )}
      </div>

      {/* Right side content box (Content Card)  */}
      <div className="flex-1 pb-10">
        <div
          className="
          p-6 
          bg-card-sidebar-bg 
          border border-gold-border-dim 
          hover:bg-interactive-hover-bg 
          hover:border-gold-accent-primary/40 
          transition-all duration-300
          cursor-pointer
          rounded-sm
        "
        >
          {/* Tag - Mono Font */}
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.2em] ${tagColorClass}`}
          >
            {tag}
          </p>

          {/* Title - Cinzel Font */}
          <h3 className="pt-2 font-cinzel text-lg font-semibold text-text-heading-primary tracking-wide">
            {title}
          </h3>

          {/* Description - Crimson Pro Font */}
          <p className="pt-2 font-crimson text-[15px] italic text-text-body-secondary leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
