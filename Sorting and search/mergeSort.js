const isAlreadySorted = arrayToSort => {
	return arrayToSort.length < 2 ? true : false;
}

const addRemainingElements = (array,mergedList) => {
	while(array.length){
		mergedList.push(array.shift());
	}
}

// Complexity : O(n log n) 
// Not in place, more memory than quickSort
const mergeSort = (arrayToSort) => {
	if(!arrayToSort){
		return 'No elements to sort';
	}

	if(isAlreadySorted(arrayToSort)){
		return arrayToSort; 
	}

	let middleIndex = Math.floor(arrayToSort.length/2);
	let left = arrayToSort.slice(0,middleIndex);
	let right = arrayToSort.slice(middleIndex,arrayToSort.length);
	return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
	let mergedList = [];
	let index = 0;

	while (left.length && right.length){
		if(left[0] <= right[0]){
			mergedList.push(left.shift());
		} else {
			mergedList.push(right.shift());
		}
	}
	addRemainingElements(left,mergedList);
	addRemainingElements(right,mergedList);
	return mergedList;
}

console.log(mergeSort(null));
console.log(mergeSort([1]));
console.log(mergeSort([]));
console.log(mergeSort([1,200,-1,65,91]));
console.log(mergeSort([22,-1,-879,85,-4,6534]));