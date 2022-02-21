export default function cleanSet(_set, startString) {
	let matchedStrings = [];
	if (startString.length === 0){
		return '';
	}
	if (typeof _set !== "object" || typeof startString !== 'string') {
		return '';
	}
	let Strings = [..._set].filter(x => x.startsWith(startString));
	Strings.forEach(x => matchedStrings.push(x.replace(startString, '')));
	return matchedStrings.join('-');
	
	}

