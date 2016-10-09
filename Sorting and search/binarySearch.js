const {quickSort} = require('./quickSort');

//  O(log n)
const binarySearch = (arrayToSort,target) => {

	if(!arrayToSort || arrayToSort.length === 0){
		return 'No elements to sort';
	}
	
	const array = quickSort(arrayToSort);
	let left = 0;
	let right = array.length -1;

	console.log(`\nSorted Array : ${array}`)
	console.log(`Target value : ${target}`)

	while(left <= right){
		let middle = Math.floor((left + right)/2);
		if(array[middle] < target){
			left = middle + 1 ;
		}
		else if(array[middle] > target){
			right = middle - 1;
		} else {
			return `Element ${target} is at the position ${middle} of the array !`;	
		}
	}
	return `Couldn't find the target value ${target}`;	
}



const search = (left, right, array, target) => {
	

	return middle;
}

console.log(binarySearch(null));
console.log(binarySearch([]));
console.log(binarySearch([1,50,3, 599,  -1], 5));
console.log(binarySearch([1,50,3, 599,  -1], 5888));