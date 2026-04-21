// For reduce code rerender write utility fun()
// those fun() reduce rerender .

import { worldsData } from "../data/WorldsData";

export const getWorldData = (worldId) =>
  worldsData?.find((item) => item?.id === worldId);

export const getCharecterData = (worldId, charecterId) => {
  // Extract world data
  const worldData = getWorldData(worldId);

  // Extract character data
  return worldData?.characters?.find((item) => item?.id === charecterId);
};
