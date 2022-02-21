export default function hasValuesFromArray(set, arr) {
	subset = new Set(arr);
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}
