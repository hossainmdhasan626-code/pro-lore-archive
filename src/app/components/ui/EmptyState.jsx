"use client";
import { Cinzel, Crimson_Pro } from "next/font/google";
import Link from "next/link";

const EmptyState = ({ type = "no-data" }) => {
  // টাইপ অনুযায়ী মেসেজ সেট করা
  const content = {
    "no-world": {
      title: "No World Selected",
      description:
        "Please select a world first. Choose your destination from the sidebar or homepage.",
      action: "Select a World First",
    },
    "no-data": {
      title: "The Archive is Empty",
      description:
        "No characters, timelines, or heroes have been recorded in this world so far.",
      action: "Data Not Found",
    },
  };

  const { title, description, action } = content[type] || content["no-data"];

  return (
    <div
      className="flex flex-col items-center justify-center 
    min-h-[60vh] 
    px-6 
    text-center"
    >
      {/* A decorative icon or symbol (according to your theme) */}
      <div
        className="mb-6 
      rotate-45 
      w-20 h-20 
      border-2 border-gold-border-dim rounded-full 
      flex items-center justify-center 
      bg-card-sidebar-bg 
      group-hover:rotate-0 
      transition-transform duration-500"
      >
        <div
          className="w-12 h-12 
        border border-gold-accent-primary 
        opacity-50"
        ></div>
      </div>

      {/* Title - Cinzel Font */}
      <h2
        className="mb-4
      font-cinzel text-2xl md:text-3xl text-text-heading-primary tracking-wider"
      >
        {title}
      </h2>

      {/* Description - Crimson Pro */}
      <p
        className="font-crimson text-text-body-secondary text-lg italic
      mb-8
      max-w-md 
      leading-relaxed "
      >
        {description}
      </p>

      {/* Bottom Metadata Tag Style */}
      <Link
        href={"/"}
        className="font-mono text-[11px] text-gold-accent-primary uppercase tracking-[0.2em] 
        px-4 py-2 
        bg-main-app-bg
        border border-gold-border-dim "
      >
        {action}
      </Link>

      {/* Decorative Line */}
      <div
        className="mt-10 
      w-32 h-px
      bg-linear-to-r from-transparent 
      via-gold-border-dim to-transparent"
      ></div>
    </div>
  );
};

export default EmptyState;
