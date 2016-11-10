class SetOfStacks {
	constructor() {
		this.threshold = 5;
		this.stacks = [];
	    this.min = 0;
	}

	getCurrentStack(){
		for(let stack of this.stacks){
			if(stack.length < this.threshold){
				return stack;
			}
		}
		this.stacks.push([]);
		return this.getLastStack();
	}

	getLastStack(){
		return this.stacks[this.stacks.length-1];
	}

	push(value){
		this.getCurrentStack().push(value);
	}

	pop(stackNum){
		this.getLastStack().pop();
		if(!this.getLastStack().length){
			this.stacks.pop();
		};
	}

	popAt(indexOfStack){
		this.stacks[indexOfStack].pop();
	}
}

let test = new SetOfStacks();
test.push('a');
test.push('b');
test.push('c');
test.push('d');
test.push('e');
test.push('f');
test.push('g');
test.push('h');
test.push('i');
test.push('j');
test.push('k');
test.push('l');
console.log(test);
test.pop();
test.pop();
test.popAt(0);
test.pop();
test.pop();
console.log(test);