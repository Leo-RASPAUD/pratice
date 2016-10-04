var checkIfOnlyUniqueCharacters = (stringToTest) => {
	let characters = [];
	for(char of stringToTest){
		if(characters.indexOf(char) === -1){
			characters.push(char);
		} else {
			return `${char} not is not unique !`
		}
	}
	return 'All the characters are unique'
}