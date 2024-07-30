export default function cleanSet(set, startString) {
  const list = [];

  // When a value starts with startString you only append the rest of the string
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  // to make the string contains all the values of the set separated by -
  return list.join('-');
}
