// A custom reusable component for header with search and filtaring feature .

import Search from "./Search";
import Filter from "./Filter";

const HeaderSearchFiltaring = ({ headerContant, filtarItem }) => {
  return (
    <div
      className=" w-full 
    px-3 py-6
    border border-gold-border-dim
    flex justify-between"
    >
      {/* Header text */}
      <div className="font-cinzel tracking-[0.2em] text-text-metadata-muted">
        {headerContant}
      </div>

      <div className="flex gap-5">
        {/* Search bar */}
        <Search />

        {/* Filtaring */}
        <Filter filtarItem={filtarItem} />
      </div>
    </div>
  );
};

export default HeaderSearchFiltaring;
