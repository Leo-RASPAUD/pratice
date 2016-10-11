const {generateNodes} = require('./utils');

const nodes = generateNodes();

const depthFirstSearch = node => {
	node.visited = true;
	if(node.next){
		for(let adjacentNode of node.next){
			if(!adjacentNode.visited){
				depthFirstSearch(adjacentNode);
			}
		}	
	}
	return;
}

const dfsIterative = node => {
	let stack = [node];
	while(stack.length > 0){
		let node = stack.shift();
		if(!node.visited){
			node.visited = true;
			if(node.next){
				stack = stack.concat(node.next);	
			}
		}
	}
}

console.log('\nRecursive');
let treeSearched = depthFirstSearch(nodes[0]);
for(node of nodes){
	node.print();
}

console.log('\nIterative');
treeSearched = dfsIterative(nodes[0]);
for(node of nodes){
	node.print();
}


