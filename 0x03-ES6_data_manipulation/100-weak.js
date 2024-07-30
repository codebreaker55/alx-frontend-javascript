export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let queryCount = weakMap.get(endpoint) || 0;
  queryCount += 1;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, queryCount);
  }
}
