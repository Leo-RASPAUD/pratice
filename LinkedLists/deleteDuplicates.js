const deleteDuplicates = (listToCheck) => {
	if(listToCheck && listToCheck.numberOfValues > 0){
		let bufferList = new DoublyLinkedList();
		let tail = listToCheck.tail;
		let bufferArray = [tail.data];
		bufferList.add(tail.previous.data);
		while(tail.previous){
			if(bufferArray.indexOf(tail.previous.data) === -1){
				bufferArray.push(tail.previous.data);
				bufferList.add(tail.previous.data);
			}
			tail.previous = tail.previous.previous;
		}
		return bufferList;
	} else {
		return 'Not elements';
	}	
}