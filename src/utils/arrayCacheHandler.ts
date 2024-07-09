export const arrayCacheHandler = (
  newItem: any,
  array: any[],
  maxCacheSize: number
): any => {
  if (array.length < maxCacheSize) {
    return [newItem, ...array];
  }
  if (maxCacheSize <= array.length) {
    return [newItem, ...array.slice(0, maxCacheSize - 1)];
  }
};
