export default function appendToEachArrayValue(array, appendString) {
<<<<<<< HEAD
  for (const idx of array) {
    const value = array[idx];
    array[idx] = appendString + value;
=======
  const newItem = [];
   for (const idx of array) {
  newItem.push(appendString + idx);
>>>>>>> d110f07e412e3d840d948f8fba92442cd209d647
  }

  return newItem;
}
