const checkIfZeroThenReplace = matrix => {
	let row = [];
	let column = [];

	for(let index = 0 ; index < matrix.length ; index++){
		for(let indexColumn = 0 ; indexColumn < matrix[0].length ; indexColumn++){
			if(matrix[index][indexColumn] === 0){
				row[index] = 1 ;
				column[indexColumn] = 1;
			}
		}
	}

	for(let index = 0 ; index < matrix.length ; index++){
		for(let indexColumn = 0 ; indexColumn < matrix[0].length ; indexColumn++){
			if((row[index] === 1 || column[indexColumn] ===1)){
				matrix[index][indexColumn] = 0;
			}
		}
	}
	return matrix;
}