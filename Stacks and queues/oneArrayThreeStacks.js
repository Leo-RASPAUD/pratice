class threeStacksWithOneArray {
	constructor() {
	    this.stackSize = 300;
	    this.buffer = [];
	    this.stackPointer = [0,0,0];
	    this.min = 0;
	  }

	push(stackNum, value){
		const index = stackNum * this.stackSize + this.stackPointer[stackNum] + 1;
		this.buffer[index] = value;
		if(this.stackPointer[stackNum] === 0){
			this.buffer[index] = {
				value : value,
				min : value
			};
		} else {
			this.buffer[index] = {
				value : value,
				min : this.buffer[index-1].min > value ? value : this.buffer[index-1].min
			};
		}
		this.stackPointer[stackNum]++;
	}

	pop(stackNum){
		if(this.isEmpty(stackNum)){
			return 'Stack is empty';
		}
		const index = stackNum * this.stackSize + this.stackPointer[stackNum];
		this.buffer = this.buffer.slice(index,1);
	}

	peek(stackNum){
		if(this.isEmpty(stackNum)){
			return 'Stack is empty';
		}
		const index = stackNum * this.stackSize + this.stackPointer[stackNum];
		return this.buffer[index].value;
	}

	isEmpty(stackNum){
		return this.stackPointer[stackNum] === 0;
	}

	getMin(stackNum){
		if(this.isEmpty(stackNum)){
			return 'Stack is empty';
		}
  		return this.peek(stackNum).min;
	}
}