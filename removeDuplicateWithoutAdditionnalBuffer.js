var removeDuplicateWithoutAdditionnalBuffer = (stringToProcess) => {
	let stringWithoutDuplicates = '';
	for(char of stringToProcess){
		if(stringWithoutDuplicates.indexOf(char) === -1){
			stringWithoutDuplicates+=char;
		}
	}
	return stringWithoutDuplicates;
}