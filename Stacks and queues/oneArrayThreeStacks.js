class threeStacksWithOneArray {
	constructor() {
	    this.stackSize = 300;
	    this.buffer = [];
	    this.stackPointer = [0,0,0];
	  }

	push(stackNum, value){
		const index = stackNum * this.stackSize + this.stackPointer[stackNum] + 1;
		this.buffer[index] = value;
		this.stackPointer[stackNum]++;
	}

	pop(stackNum){
		const index = stackNum * this.stackSize + this.stackPointer[stackNum];
		this.buffer = this.buffer.slice(index,1);
	}

	peek(stackNum){
		const index = stackNum * this.stackSize + this.stackPointer[stackNum];
		return this.buffer[index];
	}

	isEmpty(stackNum){
		return this.stackPointer[stackNum] === 0;
	}
}