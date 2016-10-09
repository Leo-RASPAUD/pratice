const {generateNodes} = require('./utils');

// O(|V| + |E]) where V is the number of vertices and E is the number edges
const bfs = tree => {

	if(!tree){
		return 'No tree to search';
	}

	tree[0].distance = 0;
	tree[0].minDistance = 0;
	let queue = [tree[0]];

	while(queue.length > 0){
		let current = queue.shift();
			current.visited = true;
			if(current.next){
				for(let elem of current.next){
					if(!elem.visited){
						elem.distance = current.distance+1;
						queue.push(elem);
					}
				}
			}	
	}

	for(let v of tree){
		v.print();
	}

}

console.log(bfs(null));
bfs(generateNodes());