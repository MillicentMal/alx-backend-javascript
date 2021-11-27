export default function appendToEachArrayValue(array, appendString) {
  const newItem = [];
   for (const idx of array) {
  newItem.push(appendString + idx);

  }

  return newItem;
}
