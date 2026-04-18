// It's a reusable search bar

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Search = () => {

    // Next.js hooks 
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

//   To add to the URL of whatever the user searches for
  const handle_search = (search_item) => {
    const params = new URLSearchParams(searchParams);

    if (search_item) {
      params.set("query", search_item);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="w-72">
      <input
        type="text"
        onChange={(e) => handle_search(e.target.value)}
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
      transition-all duration-500
    "
      />
    </div>
  );
};

export default Search;
