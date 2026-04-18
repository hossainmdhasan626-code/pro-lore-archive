import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Header_search_filtaring = ({ header_contant,filtar_item }) => {
  return (
    <div
      className=" w-full 
    px-3 py-6
    border border-gold-border-dim
    flex justify-between"
    >
      {/* Header text */}
      <div className="font-cinzel tracking-[0.2em] text-text-metadata-muted">
        {header_contant}
      </div>

      <div className="flex gap-5">
        {/* Search bar */}
        <Search />

        {/* Filtaring */}
        <Filter
          filtar_item={filtar_item}
        />
      </div>
    </div>
  );
};

export default Header_search_filtaring;
