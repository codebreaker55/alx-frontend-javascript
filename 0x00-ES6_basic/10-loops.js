export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const idx of array) {
    const value = idx;
    appendArray.push(appendString + value);
  }

  return appendArray;
}
