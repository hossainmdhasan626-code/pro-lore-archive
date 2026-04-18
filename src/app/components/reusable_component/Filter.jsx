"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Filter = ({filtar_item}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  //   To add to the URL of whatever the user select for
  const handleFilter = (role, filtar_item) => {
    const params = new URLSearchParams(searchParams);

    if (role) {
      params.set("role", role);
    } else {
      params.delete("role");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const filter_arrow = filtar_item;

  return (
    <select
      onChange={(e) => handleFilter(e.target.value)}
      className="
    bg-card-sidebar-bghover:bg-interactive-hover-bg
    text-xs text-gold-accent-primary 
    border border-gold-border-dim hover:border-gold-accent-hover rounded-sm
    p-2 font-mono 
    outline-none focus:ring-0 focus:border-gold-accent-hover
    cursor-pointer
    trainsition duration-500
    
  "
    >
      {filtar_item?.map((item) => {
        return (
          <option
            key={item?.id}
            value={item?.value}
            className="bg-card-sidebar-bg text-gold-accent-primary"
          >
            {item?.label}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;
