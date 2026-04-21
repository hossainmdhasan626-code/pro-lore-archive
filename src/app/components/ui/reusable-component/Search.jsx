// It's a reusable search bar

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Search = () => {
  // Next.js hooks
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  //   To add to the URL of whatever the user searches for
  const handleSearch = (searchItem) => {
    const params = new URLSearchParams(searchParams);

    if (searchItem) {
      params.set("query", searchItem);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="w-72">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search characters..."
        className="
      w-full px-4 py-2.5
      bg-interactive-hover-bg 
      font-crimson 
      text-text-heading-primary 
      text-[14px] 
      placeholder:text-text-metadata-muted 
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
