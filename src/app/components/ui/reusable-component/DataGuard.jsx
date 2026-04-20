// If no characters, timelines, or heroes have been recorded in this world thane
// this wrapper component was run .

import EmptyState from "../EmptyState";

const DataGuard = ({ children, data }) => {
  const hasNoData =
    data?.characters?.length === 0 &&
    data?.places?.length === 0 &&
    data?.timeline?.length === 0;

  if (hasNoData) {
    return <EmptyState type="no-data" />;
  }
  return <>{children}</>;
};

export default DataGuard;
