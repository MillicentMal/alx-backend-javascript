export default function groceriesList(){
	let groceries = new Map();
	groceries('Apples', 10);
	groceries.set('Tomatoes', 10);
	groceries.set('Pasta', 1);
	groceries.set('Rice', 1);
	groceries.set('Banana', 5);
	return groceries;
}

