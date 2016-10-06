const deleteMiddleNode = (linkedList) => {

	if(linkedList.numberOfValues % 2 === 0 || linkedList.numberOfValues === 1){
		return 'Even number of values (or only 1 element), can\'t delete the middle node !' 
	}

	let head = linkedList.head;
	let bufferLinkedList = new DoublyLinkedList();
	bufferLinkedList.add(head.data);
	let index = 1;
	const indexToDelete = Math.floor(linkedList.numberOfValues/2);


	while(head.next){
		if(index!==indexToDelete){
			bufferLinkedList.add(head.next.data);
		}
		index++;
		head.next = head.next.next;
	}

	linkedList = bufferLinkedList;
	return linkedList;
}