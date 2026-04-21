// Thise page work was rendar the full description of a charecter .

import EmptyState from "@/app/components/ui/EmptyState";
import { getCharecterData, getWorldData } from "@/app/utils/dataQuery";

const page = async ({ params }) => {
  // Extract id
  const { id, chaId } = await params;

  // Extract world data first
  const worldData = getWorldData(id);

  // Now extract this particular charecter details/data
  const data = getCharecterData(id, chaId);

  // Create a custom arrow for Charecter details table
  const chaDetailsTable = [
    {
      id: 1,
      label: "Age",
      value: data?.details?.age,
    },
    {
      id: 2,
      label: "FAction",
      value: data?.details?.faction,
    },
    {
      id: 3,
      label: "Magic Type",
      value: data?.details?.magicType,
    },
    {
      id: 4,
      label: "Status",
      value: data?.details?.status,
    },
  ];

  // If the charecter was not found
  if (!data) return <EmptyState type="no-character" />;

  return (
    <div>
      {/* Header */}
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
      </div>

      {/* Main */}

      {/* Charecter details */}
      <div
        className="p-10
      flex justify-between"
      >
        {/* Thise div rapper work was horizontally allayn this page main sections charecter  
        details text section . */}
        <div className="flex gap-10">
          {/* Img */}
          <div
            className="w-24 h-24
              flex justify-center items-center 
              border border-gold-accent-primary rounded-full group-hover:border-gold-accent-hover
              mb-4"
          >
            <span
              className="font-cinzel 
                text-white  text-xl"
            >
              {data?.initial}
            </span>
          </div>

          {/* Thise div rapper was the wrapper for the character details text . */}
          <div className="flex flex-col gap-4">
            {/* Name and other details */}
            <div className="text-white text-[32px] font-crimson">
              {data?.name}
            </div>

            {/* Title */}
            <div
              className="text-[22px]
            font-crimson italic text-gold-accent-primary"
            >
              {`"${data?.title}"`}
            </div>

            {/* Short description */}
            <div
              className="text-[18px] font-crimson text-text-body-secondary italic"
              dangerouslySetInnerHTML={{ __html: data?.shortDesc || "" }}
            />

            {/* Tags */}
            <div
              className="grid grid-cols-2 gap-2 
              mt-auto "
            >
              {/* Characters role */}
              <span
                className="px-3 py-1 
                text-[10px] font-mono uppercase text-white tracking-widest
                border border-gold-accent-primary
                bg-black/30"
              >
                {data?.role}
              </span>
              {/* Character class */}
              <span
                className="px-3 py-1 
                text-[10px] font-mono uppercase text-white tracking-widest
                border border-gold-accent-primary
                bg-black/30"
              >
                {data?.class}
              </span>
              {/* World  name */}
              <span
                className="px-3 py-1 
                text-[10px] font-mono uppercase text-white tracking-widest
                border border-gold-accent-primary
                bg-black/30"
              >
                {worldData?.name}
              </span>
              {/* Era */}
              <span
                className="px-3 py-1 
                text-[10px] font-mono uppercase text-white tracking-widest
                border border-gold-accent-primary
                bg-black/30"
              >
                {worldData?.details?.era}
              </span>
            </div>
          </div>
        </div>

        {/* Character details table */}
        <div
          className="w-75 h-auto
        p-8
        bg-card-sidebar-bg
        border border-gold-border-dim
        "
        >
          {chaDetailsTable?.map((items) => {
            return (
              <div key={items?.id}>
                <div
                  className="flex justify-between
              py-4"
                >
                  {/* label */}
                  <div className="text-sm font-mono text-text-metadata-muted tracking-wider">
                    {items?.label}
                  </div>

                  {/* value */}
                  <div
                    className="
                  text-sm font-cinzel text-white"
                  >
                    {items?.value}
                  </div>
                </div>

                {/* Horizontal line */}
                <div className="border border-gold-border-dim"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A horizontal line */}
      <div className="border border-gold-border-dim"></div>

      {/* Character History/full details */}
      <div
        className="w-full
      p-5
      flex justify-center items-center gap-5"
      >
        {/* Character description on  text */}
        <div
          className="w-4/5"
          dangerouslySetInnerHTML={{ __html: data?.fullDesc || "" }}
        />

        {/* Character relation and appears in other character and world list 
        table table */}
        <div className="w-1/5">
          {/* Relationships table */}
          <div>
            {/* Table title */}
            <p className="font-crimson text-[18px] text-gold-accent-primary">
              RELATIONSHIPS
            </p>

            {/* A horizontal line */}
            <div
              className="my-4
            border border-gold-border-dim"
            />

            {data?.relationships?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-2 my-3
                flex justify-start items-center gap-3
              bg-interactive-hover-bg 
              border-2 border-gold-border-dim rounded-sm"
                >
                  {/* Relation cart img */}
                  <div
                    className="w-6 h-6
              flex justify-center items-center
              border border-gold-accent-primary rounded-full group-hover:border-gold-accent-hover
              mb-4"
                  >
                    <span
                      className="font-cinzel 
                text-white  text-[12px]"
                    >
                      {item?.initial}
                    </span>
                  </div>

                  {/* Relation card text/content */}
                  <div>
                    {/* Name of the character wich have relation */}
                    <p className="font-crimson text-white text-[18px]">
                      {item?.name}
                    </p>

                    {/* Role and note */}
                    <div
                      className="flex justify-start 
                    font-mono text-[12px] text-text-metadata-muted tracking-widest"
                    >
                      {/* Role */}
                      <p>{item?.role}</p>
                      <p className="px-2">{"."}</p>
                      {/* Note */}
                      <p>{item?.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Appears in table */}
          <div>
            {/* Table title */}
            <p className="font-crimson text-[18px] text-gold-accent-primary">
              APPEARS IN
            </p>

            {/* A horizontal line */}
            <div
              className="my-4
            border border-gold-border-dim"
            />

            {data?.appearsIn?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-2 my-3
                flex justify-start items-center gap-3
              bg-interactive-hover-bg 
              border-2 border-gold-border-dim rounded-sm"
                >
                  {/* Relation card text/content */}
                  <div>
                    {/* Name of the character/world wich have appears in */}
                    <p className="font-crimson text-white text-[18px]">
                      {item?.title}
                    </p>

                    {/* Sbutitle */}
                    <div
                      className="flex 
                    font-mono text-[12px] text-text-metadata-muted tracking-widest"
                    >
                      {/* Subtitle */}
                      <p>{item?.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
