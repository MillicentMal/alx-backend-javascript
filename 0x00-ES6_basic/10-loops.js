export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
  
    let value = array[idx];
    let newItem = appendString + value;
     array.splice(idx, idx, newItem);
  }

  return array;
}
