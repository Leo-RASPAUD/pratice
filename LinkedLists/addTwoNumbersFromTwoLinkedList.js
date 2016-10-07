const addTwoNumbersFromTwoLinkedList = (linkedListA, linkedListB) => {

	if(!linkedListA || !linkedListB){
		return 'No elements';
	}

	if(linkedListA.numberOfValues !== linkedListB.numberOfValues){
		return 'The two lists must have the same size';
	}

	let sumList = new DoublyLinkedList();
	let headA = linkedListA.head;
	let headB = linkedListB.head;
	let carry = 0;
	const firstValue = parseInt(headA.data) + parseInt(headB.data);

	if(firstValue < 10){
		sumList.add(firstValue);
	} else {
		sumList.add(0);
		carry = 1 ; 
	}

	while(headA.next){
		const value = parseInt(headA.next.data) +parseInt(headB.next.data) + carry;
		if(value < 10){
			carry = 0;
			sumList.add(value);
		} else {
			sumList.add(0);
			carry = 1 ;
		}
		headA.next = headA.next.next;
		headB.next = headB.next.next;
	}
	return sumList;
}