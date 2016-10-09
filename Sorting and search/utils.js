class Node{
	constructor(next,name) {
	   	this.name = name
		this.next = next;
		this.visited = false;
		this.distance = 0;
		this.minDistance = 0;
  	}	

	print() {
		console.log(`Node : ${this.name}, visited : ${this.visited}, distance : ${this.distance}`);
	}
}

const generateNodes = () => {
	let nodeE = new Node(null,'E');
	let nodeH = new Node([nodeE],'H');
	let nodeF = new Node(null, 'F');
	let nodeG = new Node([nodeF, nodeH],'G');
	let nodeD = new Node(null, 'D');
	let nodeC = new Node([nodeE, nodeD, nodeF],'C');
	let nodeS = new Node([nodeG, nodeC],'S');
	let nodeB = new Node(null, 'B');
	let nodeA = new Node([nodeB, nodeS],'A');
	return [nodeA, nodeB, nodeS, nodeC, nodeG, nodeD, nodeF, nodeH, nodeE];
}

module.exports = {
	generateNodes : generateNodes
};