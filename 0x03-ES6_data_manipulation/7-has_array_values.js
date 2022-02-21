export default function hasValuesFromArray(set, arr) {
	let subset = new Set(arr);
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

