// Most situations the fastest sorting algorithm
// Works by partitionning arrays so that the smaller numbers are on the left and the larger are on the right
// Recursively sends small parts of larger arrays to itself and partitions again
// Quicksort is generally considered to be efficient and fast and so is used by V8 as the implementation for Array.prototype.sort() on arrays with more than 23 items. 
//For less than 23 items, V8 uses insertion sort2. 

// Complexity : O(n log n)
const quickSort = (arrayToSort, leftPointer, rightPointer) => {

	if(!arrayToSort || arrayToSort.length === 0){
		return 'No elememnts to sort';
	}

	leftPointer = leftPointer === undefined ? 0 : leftPointer;
	rightPointer = rightPointer === undefined ? arrayToSort.length-1 : rightPointer;
	const index = paritionArray(arrayToSort, leftPointer, rightPointer);

	if(leftPointer < index -1){
		quickSort(arrayToSort, leftPointer, index-1);
	}

	if(index < rightPointer){
		quickSort(arrayToSort, index, rightPointer);
	}

	return arrayToSort;
	
}

const paritionArray = (arrayToPartition, leftPointer, rightPointer) => {
	const pivotIndex = Math.floor((leftPointer + rightPointer) / 2);
	let pivot = arrayToPartition[pivotIndex];

	while(leftPointer <= rightPointer){
		while(arrayToPartition[leftPointer] < pivot){
			leftPointer++;
		}
		while(arrayToPartition[rightPointer] > pivot){
			rightPointer--;
		}

		if(leftPointer <= rightPointer){
			swapValues(arrayToPartition, leftPointer, rightPointer);	
			leftPointer++;
			rightPointer--;
		}
	}
	return leftPointer;
}

const swapValues = (arrayToSort, leftPointer,rightPointer) => {
	const temp = arrayToSort[leftPointer];
	arrayToSort[leftPointer] = arrayToSort[rightPointer];
	arrayToSort[rightPointer] = temp;
}

module.exports = {
	quickSort : quickSort
};