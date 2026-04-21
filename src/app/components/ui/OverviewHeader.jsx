// Thise  component was the overview page header with a search bar

const OverviewHeader = () => {
  return (
    <div
      className=" w-full 
    px-3 py-6
    border border-gold-border-dim
    flex justify-between"
    >
      {/* Header text */}
      <div className="font-cinzel tracking-[0.2em] text-text-metadata-muted">
        All WORLD
      </div>

      {/* Search bar */}
      <div className="w-72">
        <input
          type="text"
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
      transition-all duration-300
    "
        />
      </div>
    </div>
  );
};

export default OverviewHeader;
