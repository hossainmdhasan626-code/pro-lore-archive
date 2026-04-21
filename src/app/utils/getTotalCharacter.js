// Extract total characters
//   Main use of this fun() was a clain code base on the component .

export const getTotalCharacter = (worldData) => {
  return worldData?.reduce((acc, world) => {
    return acc + (world?.characters?.length || 0);
  }, 0);
};
