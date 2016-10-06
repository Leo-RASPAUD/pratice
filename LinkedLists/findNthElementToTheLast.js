const findNthElementToTheLast = (linkedList, indexN) => {
	if(!linkedList || linkedList.numberOfValues === 0){
		return 'No elements';
	}
	if(indexN > linkedList.numberOfValues){
		return 'Not enough values in the list'
	}
	if(indexN === linkedList.numberOfValues){
		return linkedList.head.data;
	}

	let index = 0;
	let nodes = [];
  	let head = linkedList.head;

	if(indexN === 0){
		nodes.push(linkedList.head.data);
	}

	while(head.next){
		if(index >= indexN){
			nodes.push(head.next.data);
		} else {
			index++;
		}
		head.next = head.next.next;
	}
	return nodes;
}